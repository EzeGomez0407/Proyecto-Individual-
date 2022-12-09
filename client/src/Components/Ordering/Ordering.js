import React, { useEffect } from 'react';
import { useState } from 'react';
import './Ordering.css'

const Ordering = (props)=>{

    const [order, setOrder] = useState({
        typeOrder: '',
        wayOrder: 'asc'
    })
    const [numCall, setNumCall] = useState(0);

    const handlerChangeOrdered = (e)=>{
        setNumCall( n=> n + 1)
        const type = e.target.name;
        const value = e.target.value;
        
        if(type === ''){
            
            setOrder( () => ({
                typeOrder: '',
                wayOrder: 'asc'
            }))
        } else {
            setOrder( o => ({
                ...o,
                [type]: value
            }))
        }
    }
    const ejectOrdering = ()=>{
        props.changeOrder({...order})
    }
    useEffect(()=>{
        if(numCall > 0)  ejectOrdering();
    },[order, numCall])

    return (
        <>
            <div className='contain-Ordering'>
                <form id='form-ordering' onChange={handlerChangeOrdered}>                 
                    <span className='span-select'>
                        <select form='form-ordering' name='typeOrder'>
                            <option value=''>Sin orden</option>
                            <option value='abc'>Alfabético</option>
                            <option value='score'>Puntaje Saludable</option>
                        </select>
                    </span>

                    <span className='span-select'>
                        <select form='form-ordering' name='wayOrder' defaultValue='asc'>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Ordering;