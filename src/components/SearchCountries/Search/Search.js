import React, { useState } from "react";
import './Search.css'

export default function Search({formSearchCountry}) {
  const [form, setForm] = useState('')
  
  const handleSubmit=(e)=>{
     e.preventDefault()
     e.target.reset()
     formSearchCountry(form)
  }

  return (
    <>
      <form data-color='element' onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(e)=>setForm(e.target.value)} placeholder="Search for a country"/>
        <button className="fas fa-search"></button>
      </form>
    </>
  );
}
