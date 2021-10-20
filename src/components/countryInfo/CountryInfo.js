import React from "react";
import "./CountryInfo.css";
import '../../App.css'
import ItemInfoCountry from "./ItemInfoCountry";
import BorderCountry from "./BorderCountry";

const CountryInfo = ({ country }) => {

   console.log(country);
  return (
    <>
        <div className="container__description">
          <h1>{country.name.official}</h1>
          <div className="container__infoCountry">
           <ItemInfoCountry country={country}/> 
          </div>
          <div className="borders">
             <p><span>Border Countries:</span> </p>
              {/* <BorderCountry data={data} borders={country.borders}/> */}
           </div>
        </div>
    </>
  );
};

export default CountryInfo;
