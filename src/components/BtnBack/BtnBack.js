import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextTheme } from "../../context/ContextTheme";
import './BtnBack.css'

function BtnBack() {
  



  return (
    <div className="container container__btn">
      <Link  to="/">
        <h4  className="btn fas fa-arrow-left">Back</h4>
      </Link>
    </div>
  );
}

export default BtnBack;
