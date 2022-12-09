import React from "react";
import './LandingPage.css';
import { BiRightArrow } from 'react-icons/bi'
import { NavLink } from "react-router-dom";

const LandingPage = (props)=>{

    return (
        <div className="landing-page">
            <h1 className="title-landing">Bienvenido a Henry Food</h1>
            <NavLink to='/recipes' className="btn-getHome">Ver Recetas <BiRightArrow/></NavLink>
        </div>
    )
}

export default LandingPage;