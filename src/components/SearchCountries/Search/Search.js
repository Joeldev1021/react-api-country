/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Search.css";

export default function Search({ formSearchCountry }) {
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    formSearchCountry(form);
  };

  const handleChange = (n) => {
    formSearchCountry(n);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value.toLocaleLowerCase())}
          placeholder="Search for a country"
        />
        <button type="button" className="fas fa-search" />
      </form>
    </>
  );
}
