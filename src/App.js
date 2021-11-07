import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
//= =====================import the router and pages======================/
import About from "./pages/About";
import Home from "./pages/Home";
import { ProviderTheme } from "./context/ContextTheme";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderTheme>
          <Header />
          <Switch>
            <Route path="/about/:keyword">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </ProviderTheme>
      </BrowserRouter>
    </div>
  );
}

export default App;
