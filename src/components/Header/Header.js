import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
          <h4 className="header__title">Where in the world?</h4>
          <button  className="fas fa-moon btn__dark">Dark modo</button>
       </div>     
    </header>
  );
};

export default Header;
