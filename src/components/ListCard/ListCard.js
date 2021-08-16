import React from "react";
import { Link } from 'react-router-dom'
import './ListCard.css'

const ListCard = ({ countries }) => {

  return (
    <>
      {countries.map((item, index) => {   
        
        return (
          <Link data-color='element'  className="link" to={`/about/${item.name}`}>
          <div data-color="element" className="card__country" key={item.name} >  
              <img src={item.flag} alt={item.name} />
                <p className="card__name">{item.name}</p>
                <p className="card__population">Population: {formatNumber(item.population)}</p>
                <p className="card__region">Region: {item.region}</p>
                <p className="card__capital">Capital: {item.capital}</p>
          </div>
          </Link>
        )
      })}
    </>
  );
};


function formatNumber (n) {

  n = String(n).replace(/\D/g, "");

  return n === '' ? n : Number(n).toLocaleString();

}


export default ListCard;
