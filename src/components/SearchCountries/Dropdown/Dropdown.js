import React from 'react'
import './Dropdown.css'

const Dropdown = () => {
  const handleOnclick=()=>{
    console.log('hola')
  }

    return (    
     <div className="dropdown">
        <ul >
          <li>África</li>
          <li>América</li>
          <li>Asia</li>
          <li>Europa</li>
          <li>Oceanía</li>
        </ul>
        <button className="btn__dropdown" onClick={handleOnclick}>
          Dropdown link
        </button>
      </div>
    )
}

export default Dropdown
