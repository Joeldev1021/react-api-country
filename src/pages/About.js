import React, { useEffect, useState } from 'react'
import BtnBack from '../components/BtnBack/BtnBack';
import {useParams} from 'react-router-dom'
import CountryInfo from '../components/countryInfo/CountryInfo';
import './styles.css'
import { getApiCountry } from '../helpers/getApiCountry';

const API_URI = "https://restcountries.eu/rest/v2";



const About=()=> {
    let { keyword } = useParams();
    const [country, setCountry] = useState('')

    useEffect(() => {
       getApiCountry(API_URI, keyword)
         .then(res=>setCountry(res[0]))
    }, [keyword])


    return (
        <>
            <BtnBack />
             <div  className="container">    
                <img className="about__img" src={country.flag} alt="" />
                <CountryInfo country={country}/>
             </div>
        </>
    )
}

export default About
