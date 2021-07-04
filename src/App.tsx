import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClassicPage } from "./pages/classic";
import { TBCPage } from "./pages/tbc";
import { SLPage } from "./pages/sl";
import { HomePage } from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/classic"}>
          <ClassicPage />
        </Route>
        <Route path={"/tbc"}>
          <TBCPage />
        </Route>
        <Route path={"/sl"}>
          <SLPage />
        </Route>
        <Route path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
