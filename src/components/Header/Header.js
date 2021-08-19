import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextTheme } from "../../context/ContextTheme";
import {FaRegMoon,FaMoon} from "react-icons/fa"
import "./header.css";


const Header = () => {
 
  const [switchTheme, setSwitchTheme] = useState(false)
 
  const themeContext = useContext(ContextTheme)
  

  const handleTheme =()=>{
        console.log('change color') 
        setSwitchTheme(!switchTheme)
        changeColorTheme()
  }

  const changeColorTheme=()=>{
         let valueColor
         switchTheme? valueColor =0 : valueColor=1
         document.documentElement.style.setProperty("--background", themeContext.colors[valueColor].$background)
         document.documentElement.style.setProperty("--element", themeContext.colors[valueColor].$element)
        document.documentElement.style.setProperty("--text", themeContext.colors[valueColor].$text)  
        document.documentElement.style.setProperty("--hover", themeContext.colors[valueColor].$hover) 
  }

  return (
    <header className="header" >
      <div className="container">
          <h4 className="header__title">Where in the world?</h4>
          <button onClick={()=>handleTheme()} 
          className="btn__dark">
            {
              switchTheme? <FaMoon className="moonIcons"/>:<FaRegMoon className="moonIcons"/>
            } 
            Dark modo
            </button>
       </div>     
    </header>
  );
};

export default Header;
