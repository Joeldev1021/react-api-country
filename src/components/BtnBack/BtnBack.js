import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextTheme } from "../../context/ContextTheme";
import './BtnBack.css'

function BtnBack() {
  const {aboutCountryPage} = useContext(ContextTheme)



  return (
    <div className="container">
      <Link  to="/">
        <h4 data-color='element' className="btn fas fa-arrow-left">Back</h4>
      </Link>
    </div>
  );
}

export default BtnBack;
