import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProviderTheme } from "./context/ContextTheme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderTheme>
        <Switch>
           <Route path="/about/:keyword">
            <About />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </ProviderTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
