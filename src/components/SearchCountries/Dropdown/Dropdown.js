/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./Dropdown.css";

const Dropdown = ({ selectDropdown }) => {
  const handleOnclick = () => {
    const ulfilter = document.getElementById("btnRef");
    const icon = document.querySelector(".aiOutlineDown");
    icon.classList.toggle("rotate");
    ulfilter.classList.toggle("show");
  };

  const handleSelect = (e) => {
    selectDropdown(e.target.dataset.name);
  };

  return (
    <div className="dropdown">
      <button type="button" className="btn__dropdown" onClick={handleOnclick}>
        Filter by region <AiOutlineDown className="aiOutlineDown" />
      </button>

      <ul onClick={handleSelect} className="dropdow__menu" id="btnRef">
        <li className="dropdown__link" data-name="africa">
          África
        </li>
        <li className="dropdown__link" data-name="americas">
          América
        </li>
        <li className="dropdown__link" data-name="asia">
          Asia
        </li>
        <li className="dropdown__link" data-name="europe">
          Europa
        </li>
        <li className="dropdown__link" data-name="oceania">
          Oceanía
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
