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
     <div className="dropdown">
       <button className="btn__dropdown" onClick={handleOnclick}>
          Filter by region
        </button>
        <ul   className="dropdow__menu" id="btnRef">
          <li  data-name="africa">África</li>
          <li data-name="americas">América</li>
          <li data-name="asia">Asia</li>
          <li data-name="europe">Europa</li>
          <li data-name="oceania">Oceanía</li>
        </ul>
      </div>
    )
}

export default Dropdown
