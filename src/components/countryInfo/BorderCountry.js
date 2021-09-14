import React from 'react'
import { useEffect } from 'react'
import {  Link, useParams } from "react-router-dom";



export default function BorderCountry({borders , data}) {
          let {keyword} = useParams();
          console.log(keyword);
    let newBoder= borders.map((el) =>data.filter(country=> country.alpha3Code === el));
    
    return (
        <div className="container__borders"> 
          {
               newBoder[0].length > 0 ? 
               newBoder.map(el=>{
                   return(
                    <Link to={`/about/${el[0].name}`} className="btn border__country" key={el[0].name}>{el[0].name}</Link>
                   )
               })
              : <p>None This country is probably on an island</p>
           } 
        </div>
    )
}
