import {  useState } from "react";
import Header from "./components/Header/Header.js";
import "./App.css";

//======================import the router and pages======================/
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from './pages/Home.js';
import { ProviderTheme } from "./context/ContextTheme";

import UsersNotFound from "./pages/UsersNotFound.js";
import useFetch from "./hooks/useFetch.js";


function App() {
  const [region, setRegion] = useState('')
  const [statusSearch, setStatusSearch] = useState(false)

  const {isLoading, isError, data, setData} = useFetch(region, statusSearch)
  
  
//form filter country
  const formSearchCountry=(query)=>{
     //when search or when filter update status
     if(query.length > 0){
      setStatusSearch(true)
      const res = data.filter(country=> country.name.common.toLowerCase().includes(query))
      setData(res)
     }else {
       setStatusSearch(false)
     }
    
     
  }

//dropdown select
  const selectDropdown=(select)=>{
    setRegion(select)
   
  }
  
 
  return (
    <div className="App">   
      <BrowserRouter>
      <ProviderTheme >
        <Header />
        <Switch>
           <Route path="/about/:keyword">
            <About />
          </Route>
          <Route exact path="/">
            <Home 
              data={data}
              formSearchCountry={formSearchCountry}
              selectDropdown={selectDropdown}
              isLoading={isLoading}
            />
          </Route>
           <Route path='*' component={UsersNotFound} /> 
        </Switch>
      </ProviderTheme>
    </BrowserRouter>
    </div>
  );
}

export default App;
