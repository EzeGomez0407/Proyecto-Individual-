import React from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { BsArrowBarRight } from 'react-icons/bs';
import './Pages.css'

const Pages = (props)=>{

    return(
        <>
            <div className='div-pages'>
                <button onClick={props.handlerPrev} className='button-pages'>
                    <BsArrowBarLeft className='icon-button'/>
                </button>
                <span className='span-pages'> pag: {props.index + 1} </span> 
                <button onClick={props.handlerNext} className='button-pages'>
                    <BsArrowBarRight className='icon-button'/>
                </button>
            </div>
        </>
    )
}

export default Pages