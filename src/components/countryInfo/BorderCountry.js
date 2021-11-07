import React from "react";
import { Link } from "react-router-dom";
import { useSingleCountry } from "../../hooks/useSingleCountry";
import NotFound from "../../pages/NotFound";

const BorderCountry = ({ border }) => {
  const { data, error } = useSingleCountry(border);

  if (error) return <NotFound />;

  return (
    <>
      {data && (
        <Link
          to={`/about/${data[0].cca2}`}
          className="btn border__country"
          key={data[0].name.common}
        >
          {data[0].name.common}
        </Link>
      )}
    </>
  );
};

export default BorderCountry;
