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
      <ProviderTheme>
        <BrowserRouter basename="/react-api-contries">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:keyword" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ProviderTheme>
    </div>
  );
}

export default App;
