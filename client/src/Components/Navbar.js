import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css';
import { GiSeatedMouse } from 'react-icons/gi';
import { getSearchRecipes } from '../Redux/Actions'
import { useDispatch } from 'react-redux';

const NavBar = (props)=>{

    const [search, setSearch] = useState('');
    const handlerOnChange = (e)=>{
        const word = e.target.value;
        setSearch((s) => s = word)
    }
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSearchRecipes(search));
    },[search])

    return(
        <>
            <nav id='navSearch'>
                <NavLink to='/'><GiSeatedMouse className='iconHome'/></NavLink>
                <div className='containAtNav'>
                    <input type='text' className='inputSearch' id='inputSearch' onChange={handlerOnChange} value={search}/>
                    <label className='labelSearch'>Busca la receta</label>
                </div>
            </nav>
        </>
    )
}

export default NavBar;