import { useEffect, useState } from "react";
import Header from "./components/Header/Header.js";
import "./App.css";

//======================import the router and pages======================/
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from './pages/Home.js'
import { ProviderTheme } from "./context/ContextTheme";
import {getApiCountry} from './helpers/getApiCountry'

const API_URL = "https://restcountries.eu/rest/v2";

function App() {
  const [data, setData] = useState([])
  const [region, setRegion] = useState('')
  const [filterCountry, setFilterCountry] = useState('')
  const [statusSearch, setStatusSearch] = useState(false)
  
  useEffect(() => {
    if(statusSearch){
      getApiCountry(API_URL, '')
      .then(res=>setData(res))
    }else {
      getApiCountry(API_URL, region)
     .then(res=>setData(res))
    }
  
  }, [region, statusSearch])


//form filter country
  const formSearchCountry=(query)=>{
     //when search or when filter update statue
     query.length ===0 ? setStatusSearch(false):setStatusSearch(true)
     const res = data.filter(country=> country.name.toLowerCase().includes(query))
     console.log(query)
     console.log(res)
  }

//dropdown select
  const selectDropdown=(select)=>{
    console.log(select)
    setRegion(select)
  }
  
 
  return (
    <div className="App">   
      <BrowserRouter>
      <ProviderTheme >
        <Header />
        <Switch>
           <Route path="/about/:keyword">
            <About/>
          </Route>
          <Route exact path="/">
            <Home 
              data={data}
              formSearchCountry={formSearchCountry}
              selectDropdown={selectDropdown}
            />
          </Route>
        </Switch>
      </ProviderTheme>
    </BrowserRouter>
    </div>
  );
}

export default App;
