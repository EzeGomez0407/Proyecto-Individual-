import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Receta.css';

const Receta = (props)=>{
    const imgAux = 'https://www.pngkit.com/png/detail/288-2884380_empty-plate-with-knife-and-fork-canvas-print.png'
    return(
        <>
            <div className='cardReceta'>
                <NavLink to={`/recipes/${props.id}`} className='link'><h3>{props.name}</h3></NavLink>
                <div className='first-circle'>
                    <div className='second-circle'>
                        {
                            props.img ? <img className='img-recipe' src={props.img} alt='imagen de receta'/> :
                            <img className='img-recipeAux' src={imgAux} alt='imagen de receta'/>
                        }
                    </div>
                </div>
                <span className='titleDieta'>Dietas:</span>
                <p className='dietas'>{props.diets.map(diet=> diet + ' ')}</p>
            </div>
        </>
    )
}

export default Receta;