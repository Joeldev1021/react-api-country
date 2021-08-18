import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextTheme } from "../../context/ContextTheme";
import "./header.css";




const Header = () => {
 const {colorTheme, aboutCountryPage } = useContext(ContextTheme)
  const [switchTheme, setSwitchTheme] = useState(true)
  const $body =  document.querySelector('body')
  const $btnDark = document.querySelector('.btn__dark')
 
  useEffect(() => {
    funcThemeDark()
    console.log('hola')
  }, [aboutCountryPage])

  const handleTheme =()=>{
       setSwitchTheme(!switchTheme) 
       funcThemeDark()  
  }

  const changeTheme=(colors)=>{
    const elementTheme =  document.querySelectorAll('[data-color="element"]');
    elementTheme.forEach(el=>{
      el.style.background = colors.backgroundElement
      el.style.color = colors.texColor
      
    })
}

const funcThemeDark=()=>{ 
  
  if(!switchTheme){
    $body.style.background = '#FAFAFA'
    $body.style.color = '#000000'
    changeTheme(colorTheme[1])
    //console.log($btnDark.classList.replace('fas', 'far'))
   
  }else {  
    $body.style.background = '#202C37'
    $body.style.color = '#FEFEFE'
    changeTheme(colorTheme[0])
    //console.log($btnDark.classList.replace('far', 'fas'))
  }
}
  
  // if(!switchTheme){
  //   $body.style.background = '#FAFAFA'
  //   $body.style.color = '#000000'
  //   changeTheme(colorTheme[1])

  //   //console.log($btnDark.classList.replace('fas', 'far'))
   
  // }else {  
  //   $body.style.background = '#202C37'
  //   $body.style.color = '#FEFEFE'
  //   changeTheme(colorTheme[0])
  //  // console.log($btnDark.classList.replace('far', 'fas'))
  // }

 



  return (
    <header className="header" data-color='element'>
      <div className="container">
          <h4 className="header__title">Where in the world?</h4>
          <button onClick={()=>handleTheme()} 
          data-color='element'
          className="far fa-moon btn__dark">Dark modo</button>
       </div>     
    </header>
  );
};

export default Header;
