import React from 'react';
import ListCard from '../ListCard/ListCard';
import Loading from '../Loading'
import './CardCountry.css'

const CardCountries = ({data}) => {
  
    return (
        <div className="container__country">
          {
            data.length>0? <ListCard countries={data}/>: <Loading/>
          }
        </div>
    )
}

export default CardCountries
