import { React } from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import { GiSeatedMouse } from 'react-icons/gi';

const NavBar = (props)=>{

    return(
        <>
            <nav>
                <NavLink to='/'><GiSeatedMouse className='iconHome'/></NavLink>
                <div className='containAtNav'>
                    <input type='text' className='inputSearch'/>
                    <label className='labelSearch'>Busca la receta</label>
                </div>
            </nav>
        </>
    )
}

export default NavBar;