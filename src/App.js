
import react, { useEffect, useState } from 'react';
import fetchApiCountries from './helpers/FetchCountries';
import Header from './components/Header/Header.js'
import './App.css';
import SearchCountries from './components/SearchCountries/SearchCountries';
import CardCountries from './components/CardCountrie/CardCountries'

function App() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    const getfetch =async()=>{
       const res = await fetchApiCountries('https://restcountries.eu/rest/v2/region/europe')
       getCountries(res)
    }    
    getfetch()
  }, [])

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
  

  return (
    <div className="App">
      <Header />
      <SearchCountries/>
       <CardCountries  countries={countries}/>
    </div>
  );
}

export default App;
