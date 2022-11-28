import { React } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/Home.css';
import Receta from './Receta';
import { getAllRecetas } from '../Redux/Actions'

const Home = (props)=>{

    // const recetas = getAllRecetas();
    const [indexPage, setIndexPage] = useState(0);
    const [currRecipe, setCurrRecipe] = useState([]);

    let until = (indexPage*9) + 9;
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes)

    const nextPageHandler = ()=>{
        until < recipes.length && setIndexPage( index => index + 1);
    }
    const prevPageHandler = ()=>{
        indexPage > 0 && setIndexPage( index => index - 1);
    }
    
    useEffect(()=>{
        dispatch(getAllRecetas())
        setCurrRecipe(()=> recipes.slice(indexPage*9,until))
    },[indexPage, recipes])

    return (
        <div className='containerHome'>
            <hr className='hr'/>
            <div>
                Paginas: {indexPage + 1} 
                <button onClick={nextPageHandler}>+</button>
                <button onClick={prevPageHandler}>-</button>
            </div>
            <h1 className='title'>Recetas Populares</h1>
            {
                currRecipe.map( (r,i) =>{
                    return <Receta name={`${r.name} n°${i + 1}`} img={r.image} diets={r.diets} id={r.id} key={i} />
                })
            }
        </div>
    )
}

export default Home;