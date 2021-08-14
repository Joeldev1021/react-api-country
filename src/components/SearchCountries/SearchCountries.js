import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Search from "./Search/Search";
import './SearchCountries.css'

const SearchCountries = ({formSearchCountry, filterDropdow}) => {
  return (
    <div className="container search__section">
     <Search formSearchCountry={formSearchCountry}/>
     <Dropdown filterDropdow={filterDropdow}/>
    </div>
  );
};

export default SearchCountries;
