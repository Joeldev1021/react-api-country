import React from "react";
import "./CountryInfo.css";
import ItemInfoCountry from "./ItemInfoCountry";

const CountryInfo = ({ country }) => {
  return (
    <>
      {country ? (
        <div className="container__description">
          <h1>{country.name}</h1>
          <div className="container__infoCountry">
            <ItemInfoCountry country={country}/>
          </div>
          <div className="container__borderCountry">
            <p> <span>Border Countries:</span> </p>
            <div className="btn border__country">France</div>
            <div className="btn border__country">Germany</div>
            <div className="btn border__country">Ingles</div>
          </div>
        </div>
      ) : (
        <h1>cargando...</h1>
      )}
    </>
  );
};

export default CountryInfo;
