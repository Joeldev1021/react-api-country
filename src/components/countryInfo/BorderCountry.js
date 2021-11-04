import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBordersCountries } from "../../hooks/useBordersCountries";


export default function BorderCountry({ border }) {
  
  const { data, error, loading } = useBordersCountries(border);
  
  return (
    <>
      {data &&(
        <Link
          to={`/about/${data.name}`}
          className="btn border__country"
          key={data[0].name.common}
        >
          {data[0].name.common}
        </Link>
      )}
    </>
  );
}
