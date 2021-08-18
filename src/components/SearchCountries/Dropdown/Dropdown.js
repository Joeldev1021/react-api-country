import React from 'react'
import './Dropdown.css'


const Dropdown = ({selectDropdown}) => {

  const handleOnclick=()=>{
    const ulfilter = document.getElementById("btnRef")
    ulfilter.classList.toggle('show')
   
  }

  const handleSelect=(e)=>{
    selectDropdown(e.target.dataset.name)
  }

 
    return (    
     <div  className="dropdown">
       <button className="btn__dropdown" onClick={handleOnclick}>
          Filter by region
        </button>
        <ul onClick={handleSelect}  className="dropdow__menu" id="btnRef">
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
