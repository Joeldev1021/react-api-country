
import  {  useState } from 'react';
import Header from './components/Header/Header.js'
import './App.css';
import SearchCountries from './components/SearchCountries/SearchCountries';
import CardCountries from './components/CardCountrie/CardCountries'
import FetchCountries from './helpers/FetchCountries';



const API_URI = 'https://restcountries.eu/rest/v2'

function App() {
  const [countries, setCountries] = useState(null)
  const [countrySearch, setCountrySearch] = useState('all')

  const getCountries=(data)=>{
      const res =  data.map((item)=>{
        const{name, flag, capital, population, region}=item
        let pais ={
          name,
           flag,
           capital,
           population,
           region
        }
         return pais
      })
      setCountries(res)
    
  }
  FetchCountries(API_URI, countrySearch, getCountries)
 

  const formSearchCountry=(n)=>{
     setCountrySearch(n)
  }

  const filterDropdow=(region)=>{
     setCountrySearch(region)
  }
  

  return (
    <div className="App">
      <Header />
      <SearchCountries formSearchCountry={formSearchCountry} filterDropdow={filterDropdow}/>
       <CardCountries  countries={countries}/>
    </div>
  );
}

export default App;
