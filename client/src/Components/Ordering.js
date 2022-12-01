import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Styles/Ordering.css'

const Ordering = (props)=>{

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
    const [numCall, setNumCall] = useState(0);

    const handlerChangeOrdered = (e)=>{
        setNumCall( n=> n + 1)
        switch(e.target.name){
            case 'abc':
                if(e.target.value === 'on'){
                    setOrder( o => ({
                        ...o,
                        [e.target.name]:{
                            on: e.target.checked,
                            order: o.abc.order
                        }
                    }))
                }else{
                    setOrder( o => ({
                        ...o,
                        [e.target.name]:{
                            on: o.abc.on,
                            order: e.target.value
                        }
                    }))
                }
            
            break;
            case 'score':
                if(e.target.value === 'on'){
                    setOrder( o => ({
                        ...o,
                        [e.target.name]:{
                            on: e.target.checked,
                            order: o.score.order
                        }
                    }))
                }else{
                    setOrder( o => ({
                        ...o,
                        [e.target.name]:{
                            on: o.score.on,
                            order: e.target.value
                        }
                    }))
                }

            break
            default: setOrder(o=> (
                o = {
                    abc: {
                        on: false,
                        order: 'A-z'
                    },
                    score: {
                        on: false,
                        order: 'Mayor'
                    }
                }
            ))
        }
    }
    const ejectOrdering = ()=>{
        props.changeOrder({...order})
    }
    useEffect(()=>{
        if(numCall > 0)  ejectOrdering();
        // setNumCall( n=> n = 0)
    },[order, numCall])

    return (
        <>
            <div className='contain-Ordering'>
                <form id='form-ordering' onChange={handlerChangeOrdered}>                 
                    <span className='spanSelect'>
                        <select className='selectAscDesc' form='form-ordering' name='abc'>
                            <option value='A-z'>A-z</option>
                            <option value='Z-a'>Z-a</option>
                        </select>
                        <select className='selectAscDesc' form='form-ordering' name='score' id='order'>
                            <option value='Mayor'>Mayor</option>
                            <option value='Menor'>Menor</option>
                        </select>
                    </span>
                    <span className='spanOrder'>
                        <label className='labelChecks'>
                            alfabético
                            <input type='checkbox' name='abc' value='on' form='form-ordering' className='inputChecks'/>
                        </label>
                        <label className='labelChecks'>
                            score
                            <input type='checkbox' name='score' value='on' form='form-ordering' className='inputChecks'/>
                        </label>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Ordering;