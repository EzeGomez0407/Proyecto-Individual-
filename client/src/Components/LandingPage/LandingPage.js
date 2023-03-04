import React from "react";
import "./LandingPage.css";
import { BiRightArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <h1 className="titleLanding">Bienvenido a Henry Food</h1>
      <div className="contentBtn">
        <NavLink to="/recipes" className="btnGetHome">
          Ver Recetas <BiRightArrow />
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
