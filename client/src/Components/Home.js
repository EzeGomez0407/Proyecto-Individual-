import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/Home.css';
import {
    getAllRecipes,
    getRecipesByDiet,
    getRecipesOrdered,
    getSearchRecipes
} from '../Redux/Actions';
import Pages from './Pages'
import Receta from './Recipe';
import Filter from './Filter'
import Ordering from './Ordering';

const Home = (props)=>{

    const [indexPage, setIndexPage] = useState(0);
    const [currRecipe, setCurrRecipe] = useState([]);
    const [currDiet, setCurrDiet] = useState('allDiets');
    const [order, setOrder] = useState({
        abc: {
            on: false,
            order: 'A-z'
        },
        score: {
            on: false,
            order: 'Mayor'
        }
    })
    const [numCallOrder, setNumCallOrder] = useState(0);

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);
    let until = (indexPage*9) + 9;
// ---------------------------------MANEJADORES DE EVENTO-------------------------------------
    const nextPageHandler = ()=>{
        until < recipes.length && setIndexPage( index => index + 1);
    }
    const prevPageHandler = ()=>{
        indexPage > 0 && setIndexPage( index => index - 1);
    }
    const handlerChangeFilter = (e)=>{
        const value = e.target.value;
        setIndexPage((index)=> index = 0);
        setCurrDiet( diet => diet = value);
        dispatch(getRecipesByDiet(value));
    }
    const handlerChangeOrder = (obj)=>{
        setOrder( o => o = obj);
        setNumCallOrder(n=>n+1);
    }
// -----------------------------------------------------------------------------------------------
    useEffect(()=>{
        console.log('render');
        // console.log(currDiet)
        if(numCallOrder > 0){
            if(order.abc.on || order.score.on){
                // console.log(recipes)
                dispatch(getRecipesOrdered(recipes,order))
                // setCurrRecipe(()=> recipes.slice(indexPage*9,until));
            }else if(!order.abc.on || !order.score.on){
                if(currDiet === 'allDiets'){
                    dispatch(getAllRecipes())
                } else {
                    dispatch(getRecipesByDiet(currDiet))
                }
            }
            setNumCallOrder(n=>n=0)
        } 
        
        recipes.length === 0 && dispatch(getAllRecipes());
        setCurrRecipe(()=> recipes.slice(indexPage*9,until));
    },[indexPage, recipes, dispatch, until, currDiet, order, numCallOrder])

// *********************************************************************************

    return (
        <div className='containerHome'>
            <hr className='hr'/>
            <Pages
                handlerNext={nextPageHandler}
                handlerPrev={prevPageHandler}
                index={indexPage}
            />
            <div className='contain-orderFilter'>
                <Filter handlerCh={(e)=>handlerChangeFilter(e)}/>
                <Ordering changeOrder={handlerChangeOrder}/>
            </div>

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