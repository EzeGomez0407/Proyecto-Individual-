import { React } from 'react';
import '../Styles/Receta.css';
import { NavLink } from 'react-router-dom';

const Receta = (props)=>{
    const imgAux = 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg'
    return(
        <>
            <div className='cardReceta'>
                <NavLink to={`${props.id}`} className='link'><h3>{props.name}</h3></NavLink>
                <img src={props.img} alt='imagen de receta'/>
                <span className='titleDieta'>Dietas:</span>
                <p className='dietas'>{props.diets}</p>
            </div>
        </>
    )
}

export default Receta;