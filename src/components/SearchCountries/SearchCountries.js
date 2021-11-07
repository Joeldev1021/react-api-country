import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Search from "./Search/Search";
import "./SearchCountries.css";

const SearchCountries = ({ formSearchCountry, selectDropdown }) => {
  return (
    <div className="container search__section">
      <Search formSearchCountry={formSearchCountry} />
      <Dropdown selectDropdown={selectDropdown} />
    </div>
  );
};

export default SearchCountries;
