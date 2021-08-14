import React from "react";
import { Link } from 'react-router-dom'
import './ListCard.css'

const ListCard = ({ countries }) => {
  return (
    <>
      {countries.map((item, index) => {    
        return (
          <div className="card__country" key={item.name} data-color='element'>
             <Link data-color='element' className="link" to={`/about/${item.name}`}>
              <img src={item.flag} alt={item.name} />
                <p className="card__name">{item.name}</p>
                <p className="card__population">Population: {item.population}</p>
                <p className="card__region">Region: {item.region}</p>
                <p className="card__capital">Capital: {item.capital}</p>
              </Link>
          </div>
        )
      })}
    </>
  );
};

export default ListCard;
