import { React } from 'react';
import '../Styles/Receta.css';
import { NavLink } from 'react-router-dom';

const Receta = (props)=>{
    
    return(
        <>
            <div className='cardReceta'>
                <NavLink to={`/recipes/${props.id}`} className='link'><h3>{props.name}</h3></NavLink>
                <div className='first-circle'>
                    <div className='second-circle'>
                        <img src={props.img} alt='imagen de receta'/>
                    </div>
                </div>
                <span className='titleDieta'>Dietas:</span>
                <p className='dietas'>{props.diets.map(diet=> diet + ' ')}</p>
            </div>
        </>
    )
}

export default Receta;