import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../Redux/Actions";
import { NavLink } from 'react-router-dom'
import '../../Styles/CreateRecipe.css'
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
    })


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
        e.preventDefault()
        dispatch(postRecipe(recipe))
        
        console.log(recipe);
    }

    useEffect(()=>{ 
        !diets.length && dispatch(getDiets());
        if(recipe.diets.length !== dietsSelect.length){
             setRecipe(r =>(
                {
                    ...r,
                    diets: dietsSelect
                }
            ))
        }
        console.log(recipe);
    },[diets, dispatch, recipe, dietsSelect])

    return (
        <>
            <div className='divForm'>
                <h2 className="h2-title">Crea tu Receta</h2>
                <form className="form-create" id="create-recipe">

                    <label className="labelForm">
                        Nombre de Receta:
                        <input className="input-create" autoComplete="off" type='text' onChange={(e)=> onChangeRecipe(e,setRecipe)} id='name'/>
                    </label>

                    <label className="labelForm">
                        Nivel Saludable:
                        <input className="input-create" autoComplete="off" type="number" id='healthScore' onChange={(e)=> onChangeRecipe(e,setRecipe)}/>
                    </label>

                    <label className="labelForm">
                        Pasos:
                        <input className="input-create" autoComplete="off" type='text' id="instructions" onChange={(e)=> onChangeRecipe(e,setRecipe)}/>
                    </label>

                    <label className="labelForm">
                        Resumen:
                        <textarea id="summary" onChange={(e)=> onChangeRecipe(e,setRecipe)}/>
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

                    <NavLink to='/recipes' className='button' onClick={onClickSubmit}>
                        Crear Receta
                    </NavLink>
                </form>
            </div>
        </>
    )
}

export default CreateRecipe;