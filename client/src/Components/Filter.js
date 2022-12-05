import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../Redux/Actions';
import '../Styles/Filter.css';

const Filter = (props)=>{

    const dispatch = useDispatch();
    const diets = useSelector( state => state.diets );

    useEffect(()=>{

        diets.length === 0 && dispatch(getDiets())
        
    },[dispatch,diets])

    return (
        <>
            <div className='contain-filter'>
                <form id='formFilter' onChange={(e)=>props.handlerCh(e)}>
                <select name='diets' form='formFilter' defaultValue='allDiets' className='filter'>
                    <option value='allDiets'>Filtro por dieta</option>
                    {
                        diets.map( diet =>(
                            <option value={diet.name} key={diet.id}>{diet.name}</option>
                        ))
                    }
                </select>
                </form>
            </div>
        </>
    )
}

export default Filter;