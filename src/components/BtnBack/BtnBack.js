import React from "react";
import { Link } from "react-router-dom";

import "./BtnBack.css";

const BtnBack = () => {
  return (
    <div className="container container__btn">
      <Link to="/">
        <p className="btn">
          <i className="fas fa-arrow-left" />
          Back
        </p>
      </Link>
    </div>
  );
};

export default BtnBack;
