import React, { useState } from "react";
import SearchCountries from "../components/SearchCountries/SearchCountries";
import CardCountries from "../components/CardCountry/CardCountries";
import useFetch from "../hooks/useFetch";
import NotFound from "./NotFound";

const Home = () => {
  const [region, setRegion] = useState("");
  const [statusSearch, setStatusSearch] = useState(false);

  const { isLoading, data, setData } = useFetch(region, statusSearch);

  const formSearchCountry = (query) => {
    // when search or when filter update status
    if (query.length > 0) {
      setStatusSearch(true);
      const res = data.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      );
      setData(res);
    } else {
      setStatusSearch(false);
    }
  };

  // dropdown select
  const selectDropdown = (select) => {
    setRegion(select);
  };

  return (
    <>
      <SearchCountries
        formSearchCountry={formSearchCountry}
        selectDropdown={selectDropdown}
      />
      {!isLoading && data.length === 0 ? (
        <NotFound />
      ) : (
        <CardCountries data={data} isLoading={isLoading} />
      )}
    </>
  );
};

export default Home;
