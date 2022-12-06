import React from 'react';
import s from './Loader.module.css'

const Loader = (props)=>{
    
    return (
        <div className={s.loaderContent}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;