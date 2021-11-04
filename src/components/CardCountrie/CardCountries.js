import React from 'react';
import ListCard from '../ListCard/ListCard';
import Loading from '../loading/Loading'
import './CardCountry.css'

const CardCountries = ({data}) => {


    return (
        <div  className="container__country">
           <ListCard  countries={data}/>
        </div>
    )
}

export default CardCountries
