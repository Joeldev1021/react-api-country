import React from "react";
import SearchCountries from "../components/SearchCountries/SearchCountries";
import CardCountries from "../components/CardCountrie/CardCountries";
import Loading from "../components/Loading";



const Home = ({ data, formSearchCountry,selectDropdown, isLoading }) => {


  console.log(data)
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
