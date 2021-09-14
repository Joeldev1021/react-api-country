import React from "react";
import SearchCountries from "../components/SearchCountries/SearchCountries";
import CardCountries from "../components/CardCountrie/CardCountries";



const Home = ({ data, formSearchCountry,selectDropdown }) => {



  return (
    <>
     <SearchCountries
        formSearchCountry={formSearchCountry}
        selectDropdown={selectDropdown}
      />
    <CardCountries data={data}/>
    </>
  )
};

export default Home;
