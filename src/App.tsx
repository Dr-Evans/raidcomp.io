import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RaidCompPage } from "./pages/raid-comp";
import { ExpansionID } from "./models";
import { ExpansionContext } from "./db";
import { WrathDB } from "./db/wrath";

const supportedExpansions = {
  // TODO: Add other expansionDBs
  [ExpansionID.Classic]: true,
  [ExpansionID.BurningCrusade]: true,
  [ExpansionID.WrathOfTheLichKing]: WrathDB,
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route
            path={"/:expansionID"}
            children={({ match }) =>
              Object.keys(supportedExpansions).includes(
                match!.params.expansionID
              ) ? (
                // TODO: Switch case to select DBs
                <ExpansionContext.Provider value={WrathDB}>
                  <RaidCompPage />
                </ExpansionContext.Provider>
              ) : (
                <Redirect to={"/"} />
              )
            }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
