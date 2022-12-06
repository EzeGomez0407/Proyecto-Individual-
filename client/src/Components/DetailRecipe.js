import React, {useEffect, useState} from "react";
import '../Styles/DetailRecipes.css';
import { cleanDetail, getRecipesById } from '../Redux/Actions'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "./Loader/Loader";

const DetailRecipes = (props)=>{

    const {id} = useParams();
    const dispatch = useDispatch()
    const recipe = useSelector( state => state.recipe_detail);
    const [steps, setSteps] = useState([])
    const imgAux = 'https://previews.123rf.com/images/freshwater/freshwater1711/freshwater171100021/89104479-p%C3%ADxel-404-p%C3%A1gina-de-error-p%C3%A1gina-no-encontrada.jpg'

    useEffect(()=>{
        !Object.keys(recipe).length && dispatch(getRecipesById(id));
        Object.keys(recipe).length && setSteps( s => {
            if(!recipe.instructions || !recipe.instructions.length){
                return s = 'Error'
            }else{
                if(Array.isArray(recipe.instructions)){
                return s = recipe.instructions[0].steps
                }
                return s = recipe.instructions
            }
        });
    },[dispatch,id,recipe])

    useEffect(()=>{
        return function(){
            dispatch(cleanDetail())
        }
    },[dispatch])



    return (
        <div className="contentDetail">
            {
                !recipe.name && <Loader/>
            }
            <div className="contDetailRecipe">
                <img src={recipe.image || imgAux} alt="imagen de receta" className="imgRecipe"/>
                <div className="bodyCard">
                    
                    <div className="firstPart">
                        <div className="name-typeDish">
                            <h2 className="nameRecipe">{recipe.name}</h2>
                            <span><b>Platos:</b>{recipe.dishTypes} </span>
                        </div>
                        <div className="divDiets">
                            <span className="spanDiets"><b>Dietas:</b>{recipe.diets}</span>
                        </div>
                        <div className="healthScore">
                            <span>Health<br/>Score</span>
                            <span>{recipe.healthScore}</span>
                        </div>
                    </div>
                    
                    <div className="secondPart">
                        <div className="divSummary">
                            <span className="spanSummary"><b>Resumen: </b>{recipe.summary}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="div-instructions">
                <h3 className="title-instruc">Instrucciones</h3>
                {   
                    steps === 'Error' ? <p>No se especificaron instrucciones</p> :
                    !Array.isArray(steps) ? <p>{steps}</p> :
                    steps.map( (step,index) =>{
                        return <div className="steps" key={index}>
                            <h3>Paso {step.number}</h3>
                            <span>
                                {step.step}
                            </span>
                            
                            <div className="div-elem-ingr">
                                <h3 className="h3-ingr-elem">Ingredientes:</h3>
                                {
                                    !step.ingredients.length ?
                                    <p>No se especificaron ingredientes</p> :
                                        <div className="div-ul">
                                            <ul>
                                                {
                                                    step.ingredients.map(i=>{
                                                        return <li key={i.id}>{i.name}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                }
                            </div>
                            <div className="div-elem-ingr">
                                <h3 className="h3-ingr-elem">Utensillos:</h3>
                                {
                                    !step.equipment.length ?
                                    <p>No se especificaron utensillos</p> :
                                        <div className="div-ul">
                                            <ul>
                                                {
                                                    step.equipment.map(e=>
                                                    {
                                                        return <li key={e.id}>{e.name}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DetailRecipes;

