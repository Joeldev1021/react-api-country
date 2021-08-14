import React from "react";
import { Link } from "react-router-dom";

function BtnBack() {
  return (
    <div>
      <Link to="/">
        <h2>Back</h2>
      </Link>
    </div>
  );
}

export default BtnBack;
