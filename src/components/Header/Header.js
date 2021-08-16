import React, { useContext } from "react";
import { ContextTheme } from "../../context/ContextTheme";
import "./header.css";

let colorBackground


const Header = () => {

    const {themeDark,setThemeDark, colorTheme} = useContext(ContextTheme)

  const handleTheme =()=>{
     
      const elementTheme =  document.querySelectorAll('[data-color="element"]');
      addChangeColor(elementTheme)
      setThemeDark(theme=> !theme)
  }

  const addChangeColor=(el)=>{
      if(!themeDark){
        colorBackground = colorTheme[0]
      }else {
        colorBackground = colorTheme[1]
      }
      changeTheme(el)
  }

  const changeTheme=(el)=>{
    el.forEach(element => {
       element.style.background = colorBackground.backgroundElement
       element.style.border =  colorBackground.borderColor
       element.style.color = colorBackground.texColor     
    });
    
    const appStyle =  document.querySelector('.App')
    appStyle.style.background = colorBackground.backgroundTheme
    appStyle.style.color = colorBackground.texColor 
    const liApp =document.querySelectorAll('li') 
    liApp.forEach(el=>{
      el.classList.toggle('dropdown__link')
      el.classList.toggle('hover')
    })
    // liApp.style.background.hover = colorBackground.backgroundTheme
  }
  let colorBtn
  colorBackground? colorBtn = colorBackground.texColor : colorBtn = 'black'

  return (
    <header className="header" data-color='element'>
      <div className="container">
          <h4 className="header__title">Where in the world?</h4>
          <button onClick={()=>handleTheme()} style={{color: colorBtn}} className="fas fa-moon btn__dark">Dark modo</button>
       </div>     
    </header>
  );
};

export default Header;
