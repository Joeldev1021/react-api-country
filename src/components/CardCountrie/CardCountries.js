import React from 'react';
import ListCard from '../ListCard/ListCard';
import './CardCountry.css'


const CardCountries = ({countries}) => {
  
    const LoadingCountries = ()=>{
        return (
            <h1>cargando...</h1>
        )
    }

    return (
        <div className="container__country">
           {countries === null? <LoadingCountries/> : <ListCard countries={countries}/>}
        </div>
    )
}

export default CardCountries
