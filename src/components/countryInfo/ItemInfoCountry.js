import React from "react";

const ItemInfoCountry = ({ country }) => {
  return (
    <>
      <div className="description_info">
        <p>
          <span>Native Name: </span>
          {country.nativeName}
        </p>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Sub Region: </span>
          {country.subregion}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
      <div className="description_info">
        <p>
          <span>Top Level Domain: </span>
          {country.topLevelDomain}
        </p>
        <p>
          <span>Currencies: </span>
          {country.currencies[0].name}
        </p>
        <div className="lenguages">
          <p><span>Languages: </span></p>
          <div className="container__lenguages">
            {country.languages.map((lenguage,index) => {
                
              return country.languages.length-1 > index? <p>{lenguage.name},</p>:<p>{lenguage.name}</p>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInfoCountry;
