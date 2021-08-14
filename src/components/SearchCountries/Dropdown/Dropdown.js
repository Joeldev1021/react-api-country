import React from 'react'
import './Dropdown.css'


const Dropdown = ({filterDropdow}) => {

  const handleOnclick=()=>{
    const ulfilter = document.getElementById("btnRef")
    ulfilter.classList.toggle('show')
    const liFileter = ulfilter.querySelectorAll('li')
    liEvent(liFileter)
  }

  const liEvent =(li)=>{
       li.forEach(element => {
          element.addEventListener('click',(e)=>{
            filterDropdow(e.target.dataset.name)
          })
       });
  }

 
    return (    
     <div  className="dropdown">
       <button data-color="element" className="btn__dropdown" onClick={handleOnclick}>
          Filter by region
        </button>
        <ul data-color="element" className="dropdow__menu" id="btnRef">
          <li className="dropdown__link" data-name="africa">África</li>
          <li className="dropdown__link" data-name="americas">América</li>
          <li className="dropdown__link" data-name="asia">Asia</li>
          <li className="dropdown__link" data-name="europe">Europa</li>
          <li className="dropdown__link" data-name="oceania">Oceanía</li>
        </ul>
      </div>
    )
}

export default Dropdown
