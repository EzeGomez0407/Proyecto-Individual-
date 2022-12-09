import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../Redux/Actions";
import { NavLink } from 'react-router-dom'
import './CreateRecipe.css'
import { onChangeRecipe } from "./onChange";

const CreateRecipe = (props)=>{

    const [dietsSelect, setDietsSelect] = useState([])
    const dispatch = useDispatch();
    const diets = useSelector( state => state.diets);
    const [recipe,setRecipe] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        instructions: '',
        createInDB: true,
        diets: []
    });

    const onChangeDietSelect = (e)=>{
        const diet = e.target.value;
        if(diet === 'none') {
            setDietsSelect(()=>[]);
            return 
        }
        if(!dietsSelect.includes(diet)){
            setDietsSelect( diets => [...diets, diet]);
            return
        }
    }
    const onClickQuitDiet = (e)=>{
        e.preventDefault()
        const idBtn = e.target.id
        setDietsSelect( diets => {
            return diets.filter( d => d !== idBtn)
        })
    }
    const onClickSubmit = (e)=>{
        dispatch(postRecipe(recipe))
    }

    
    const select = document.querySelector('.select-dieta');

    useEffect(()=>{
        
        !diets.length && dispatch(getDiets());
        if(recipe.diets.length !== dietsSelect.length){
            if(!dietsSelect.length)select.value = 'none';
             setRecipe(r =>(
                {
                    ...r,
                    diets: dietsSelect
                }
            ))
        }
    },[diets, dispatch, recipe, dietsSelect, select])

    return (
        <>
            <div className='divForm'>
                <h2 className="h2-title">Crea tu Receta</h2>
                <form className="form-create" id="create-recipe">

                    <label className="labelForm">
                        Nombre de Receta:
                        <input className="input-create" autoComplete="off" type='text' onChange={(e)=> onChangeRecipe(e,setRecipe)} id='name' placeholder="Obligatorio"/>
                        <span className="valid-name">El nombre de la receta solo puede contener letras o números y debe contener al menos 3 caracteres</span>
                    </label>

                    <label className="labelForm">
                        Nivel Saludable:
                        <input className="input-create" autoComplete="off" type="number" id='healthScore' onChange={(e)=> onChangeRecipe(e,setRecipe)} placeholder="Obligatorio"/>
                        <span className="valid-healthScore">Solo valores de 0 a 100</span>
                    </label>

                    <label className="labelForm">
                        Pasos:
                        <textarea className="input-create" autoComplete="off" type='text' id="instructions" onChange={(e)=> onChangeRecipe(e,setRecipe)}/>
                    </label>

                    <label className="labelForm">
                        Resumen:
                        <textarea id="summary" onChange={(e)=> onChangeRecipe(e,setRecipe)} placeholder="Obligatorio"/>
                        <span className="valid-summary" id="summaryValid">Debes agregar un resumen</span>
                    </label>

                    <select name='diets' form='create-recipe' defaultValue='none' onChange={onChangeDietSelect} className='select-dieta'>
                    <option value='none'>none</option>
                        {
                            diets.map( diet =>(
                                <option value={diet.name} key={diet.id}>{diet.name}</option>
                            ))
                        }
                    </select>
                    <h3>Tu receta cumple con alguna dieta?</h3>
                    <ul className="diets-selects">
                        {
                            !dietsSelect.length ? 
                            <p>Puedes seleccionar una dieta para tu receta ^_^</p> :
                            dietsSelect.map( (d,i) => {
                                return <li key={i} className='li-diet'>
                                    <span className="spanDiet">{d}</span>
                                    <button id={d} className='btn-quitDiet' onClick={onClickQuitDiet}>x</button>
                                </li>
                            })
                        }
                    </ul>

                    <NavLink to='/recipes' >
                       <button className='button' onClick={onClickSubmit} hidden={true}>Crear Receta</button>
                    </NavLink>
                </form>
            </div>
        </>
    )
}

export default CreateRecipe;