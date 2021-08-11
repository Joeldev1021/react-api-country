import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Search from "./Search/Search";

const SearchCountries = () => {
  return (
    <div className="container">
        <h1>search</h1>
      <Search/>
     <Dropdown/>
    </div>
  );
};

export default SearchCountries;
