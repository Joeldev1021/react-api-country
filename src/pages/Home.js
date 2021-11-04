import React from "react";
import SearchCountries from "../components/SearchCountries/SearchCountries";
import CardCountries from "../components/CardCountrie/CardCountries";
import Loading from "../components/loading/Loading";



const Home = ({ data, formSearchCountry,selectDropdown, isLoading }) => {

  return (
    <>
     <SearchCountries
        formSearchCountry={formSearchCountry}
        selectDropdown={selectDropdown}
      />
       {isLoading || data.length === 0 ? <Loading /> : <CardCountries data={data}/>}
    </>
  )
};

export default Home;
