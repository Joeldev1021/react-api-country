import React from "react";

const CountryInfo = ({ country }) => {
  console.log(country);
  return (
    <>
      <div className="description">
        <div>
          <h1>{country.name}</h1>
          <p>{country.nativeName}</p>
          <p>{country.population}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.capital}</p>
        </div>
        <div>
          <p>{country.topLevelDomain}</p>
          <p>{country.population}</p>
          <p>{country.region}</p>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
