import React from 'react';
import ListCard from '../ListCard/ListCard';
import './CardCountry.css'

const CardCountries = ({countries}) => {
  
    const LoadingCountries = ()=>{
        return (
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }

    return (
        <div className="container__country">
           {countries === null? <LoadingCountries/>:<ListCard countries={countries} />}
        </div>
    )
}

export default CardCountries
