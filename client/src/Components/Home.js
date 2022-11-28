import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/Home.css';
import { getAllRecipes, getRecipesByDiet } from '../Redux/Actions'
import Pages from './Pages'
import Receta from './Recipe';
import Filter from './Filter'

const Home = (props)=>{

    const [indexPage, setIndexPage] = useState(0);
    const [currRecipe, setCurrRecipe] = useState([]);
    const [currDiet, setCurrDiet] = useState('allDiets');

    let until = (indexPage*9) + 9;
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);
    // const recipesByDiet = useSelector(state => state.recipeByDiet);

// ---------------------------------MANEJADORES DE EVENTO-------------------------------------
    const nextPageHandler = ()=>{
        until < recipes.length && setIndexPage( index => index + 1);
    }
    const prevPageHandler = ()=>{
        indexPage > 0 && setIndexPage( index => index - 1);
    }
    const handlerChange = (e)=>{
        const value = e.target.value;
        setIndexPage((index)=> index = 0);
        setCurrDiet( diet => diet = value);
        dispatch(getRecipesByDiet(value));
    }
// -----------------------------------------------------------------------------------------------
    useEffect(()=>{

        recipes.length === 0 && dispatch(getAllRecipes());
        setCurrRecipe(()=> recipes.slice(indexPage*9,until));

    },[indexPage, recipes, dispatch, until, currDiet ])

// *********************************************************************************

    return (
        <div className='containerHome'>
            <hr className='hr'/>
            <Pages
                handlerNext={nextPageHandler}
                handlerPrev={prevPageHandler}
                index={indexPage}
            />

            <Filter handlerCh={(e)=>handlerChange(e)}/>

            <h1 className='title'>Recetas Populares</h1>
            {
                currRecipe.map( (r,i) =>{
                    return <Receta name={`${r.name} n°${i + 1}`} img={r.image} diets={r.diets} id={r.id} key={i} />
                })
            }
            <Pages
                handlerNext={nextPageHandler}
                handlerPrev={prevPageHandler}
                index={indexPage}
            />
        </div>
    )
}

export default Home;