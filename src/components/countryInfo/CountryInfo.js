/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./CountryInfo.css";
import "../../App.css";
import ItemInfoCountry from "./ItemInfoCountry";
import BorderCountry from "./BorderCountry";
import useFetch from "../../hooks/useFetch";

const CountryInfo = ({ country }) => {
  const { data, isError, isLoading } = useFetch(country.borders);
  return (
    <>
      <div className="container__description">
        <h1>{country.name.official}</h1>
        <div className="container__infoCountry">
          <ItemInfoCountry
            nativeName={country.nativeName}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            topLevelDomain={country.topLevelDomain}
            languages={country.languages}
            currencies={country.currencies[0]}
          />
        </div>
        <div className="borders">
          <p>
            <span>Border Countries:</span>
          </p>
          <div className="container__borders">
            {country.borders ? (
              data.length &&
              data.map((border) => {
                return (
                  <BorderCountry
                    key={border.name.common}
                    codeBorder={border.cca2}
                    nameCommon={border.name.common}
                  />
                );
              })
            ) : (
              <p>Country No borders</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
