import React, { useEffect, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../Styles/Nav.css';
import { GiSeatedMouse } from 'react-icons/gi';
import { getAllRecipes, getSearchRecipes } from '../Redux/Actions'
import { useDispatch } from 'react-redux';

const NavBar = (props)=>{

    const [search, setSearch] = useState('');
    const [numCallOrder, setNumCallOrder] = useState(0);

    const handlerOnChange = (e)=>{
        const word = e.target.value;
        setSearch((s) => s = word);
        setNumCallOrder( n => n + 1);
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        if(numCallOrder > 0){
            if(search !== ''){
                dispatch(getSearchRecipes(search))
                setNumCallOrder( n => n = 0) 
            } else {
                dispatch(getAllRecipes())
                setNumCallOrder( n => n = 0)
            }
        }   
    },[search, dispatch, numCallOrder])

    return(     
        <>
            <nav id='navSearch'>
                <NavLink to='/recipes'><GiSeatedMouse className='iconHome'/></NavLink>
                <div className='containAtNav'>
                    <Route exact path={'/recipes'}>
                        <div className='input-group'>
                            <input type='text' className='input' onChange={handlerOnChange} value={search} auto='off' placeholder='Busca la receta'/>
                            {/* <label className='user-label'>Busca la receta</label> */}
                        </div>
                    </Route>
                </div>
                <Route path='/recipes'>
                        <NavLink to='/recipes-create' className='link-create'>
                            <div className='btnPost'>
                                <p>Crear</p>
                                <p>Receta</p>
                            </div>
                        </NavLink>
                    </Route>
            </nav>
        </>
    )
}

export default NavBar;