import React from 'react'
import {  Link, useParams } from "react-router-dom";



export default function BorderCountry({borders , data}) {
   
    
    let newBoder= borders.map((el) => data.filter(country=> country.alpha3Code === el)).map(country =>  country[0]? country[0].name: null).filter(el=> el !==null)

  
    return (
        <div className="container__borders"> 
          {
               newBoder.length > 0 ? 
               newBoder.map(el=>{
                   return(
                    <Link to={`/about/${el}`} className="btn border__country" key={el}>{el}</Link>
                   )
               })
              : <p>None This country is probably on an island</p>
           } 
        </div>
    )
}
