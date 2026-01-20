import React from "react";
import "./LandingPage.css";
import { BiRightArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <h1 className="titleLanding">Las Recetas de Ratuille</h1>
      <div className="contentBtn">
        <NavLink to="/recipes" className="btnGetHome">
          Ver Recetas <BiRightArrow />
        </NavLink>
      </div>
      <img src="/ratuile.png" alt="imagen de ratuile sosteniendo un plato" className="img-ratuile"/>
    </div>
  );
};

export default LandingPage;
