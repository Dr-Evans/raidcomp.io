import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RaidCompPage } from "./pages/raid-comp";
import { ExpansionID, getExpansionID } from "./models";
import { ThemeProvider } from "@mui/material";
import { getExpansionDB } from "./models/db";

const supportedExpansions = {
  [ExpansionID.Classic]: true,
  [ExpansionID.BurningCrusade]: true,
  [ExpansionID.WrathOfTheLichKing]: true,
};

function App() {
  const [expansionID, setExpansionID] = useState(ExpansionID.Classic);

  return (
    <ThemeProvider theme={getExpansionDB(expansionID).theme}>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <HomePage
              onExpansionHover={(hoveredExpansionID) =>
                setExpansionID(hoveredExpansionID)
              }
            />
          </Route>
          <Route
            path={"/:expansionID"}
            children={({ match }) =>
              Object.keys(supportedExpansions).includes(
                match!.params.expansionID
              ) ? (
                <RaidCompPage
                  expansionID={getExpansionID(match!.params.expansionID)}
                />
              ) : (
                <Redirect to={"/"} />
              )
            }
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
