import React, { useState } from 'react'
import Header from '../components/Header/Header'
import BtnBack from '../components/BtnBack/BtnBack';
import {useParams} from 'react-router-dom'
import FetchCountries from '../helpers/FetchCountries';
import CountryInfo from '../components/countryInfo/CountryInfo';

const API_URI = "https://restcountries.eu/rest/v2";

const About=()=> {
    let { keyword } = useParams();
    const [country, setCountry] = useState('')

    const getContry=(n)=>{
        setCountry(n[0])
        
    }
    

    FetchCountries(API_URI, keyword, getContry)

  
    return (
        <div>
            <Header/>
             <BtnBack />
             <h1>about Contry {keyword}</h1>
             <div className="contianer">
                <img className="about__img" src={country.flag} alt="" />
                <CountryInfo country={country}/>
             </div>
        </div>
    )
}

export default About
