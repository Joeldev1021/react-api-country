import React from "react";
import "./CountryInfo.css";
import '../../App.css'
import ItemInfoCountry from "./ItemInfoCountry";
import BorderCountry from "./BorderCountry";

const CountryInfo = ({ country,data }) => {

 
  return (
    <>
      {country ? (
        <div className="container__description">
          <h1>{country.name}</h1>
          <div className="container__infoCountry">
            <ItemInfoCountry country={country}/>
          </div>
          <div className="borders">
             <p><span>Border Countries:</span> </p>
              <BorderCountry data={data} borders={country.borders}/>
           </div>
        </div>
      ) : (
        <h1>cargando...</h1>
      )}
    </>
  );
};

export default CountryInfo;
