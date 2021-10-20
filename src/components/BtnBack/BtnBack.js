import React from "react";
import { Link } from "react-router-dom";

import './BtnBack.css'

function BtnBack() {
  
  return (
    <div className="container container__btn">
      <Link  to="/">
        <p className="btn"><i class="fas fa-arrow-left"></i>Back</p>
      </Link>
    </div>
  );
}

export default BtnBack;
