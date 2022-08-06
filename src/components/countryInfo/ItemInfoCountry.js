import React from "react";

const ItemInfoCountry = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  languages,
  currencies
}) => {
  return (
    <>
      <div className="description_info">
        <p>
          <span>Native Name: </span>
          {nativeName}
        </p>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Sub Region: </span>
          {subregion}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
      <div className="description_info info__left">
        <p>
          <span>Top Level Domain: </span>
          {topLevelDomain}
        </p>
        <p>
          <span>Currencies: </span>
          {currencies.name}
        </p>
        <div className="lenguages">
          <p>
            <span>Languages: </span>
          </p>
          <div className="container__lenguages">
            {languages.map((lenguage, index) => {
              return languages.length - 1 > index ? (
                <p key={lenguage.name}>{lenguage.name},</p>
              ) : (
                <p key={lenguage.name}>{lenguage.name}</p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInfoCountry;
