import React from "react";
import ListCard from "../ListCard/ListCard";
import Loading from "../Loading/Loading";
import "./CardCountry.css";

const CardCountry = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container__country">
          <ListCard countries={data} />
        </div>
      )}
    </>
  );
};

export default CardCountry;
