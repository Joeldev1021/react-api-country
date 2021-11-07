import React from "react";
import { Link } from "react-router-dom";
import "./ListCard.css";

const nf = new Intl.NumberFormat("en-US");

const ListCard = ({ countries }) => {
  return (
    <>
      {countries.map((item) => {
        return (
          <Link
            className="link"
            to={`/about/${item.cca2}`}
            key={item.name.official}
          >
            <div className="card__country">
              <img src={item.flags.png} alt={item.name.official} />
              <div className="card__info__country">
                <p className="card__item--name">{item.name.common}</p>
                <p className="card__item">
                  Population: {nf.format(item.population)}
                </p>
                <p className="card__item">Region: {item.region}</p>
                <p className="card__item">Capital: {item.capital}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ListCard;
