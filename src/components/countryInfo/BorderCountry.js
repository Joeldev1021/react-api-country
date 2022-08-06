/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const BorderCountry = ({ codeBorder, nameCommon }) => {
  return (
    <>
      <Link to={`/about/${codeBorder}`} className="btn border__country">
        {nameCommon}
      </Link>
    </>
  );
};

export default BorderCountry;
