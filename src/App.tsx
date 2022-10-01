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
import { IntlProvider } from "react-intl";
import { WrathDB } from "./models/db/wrath";

const supportedExpansions = {
  [ExpansionID.WrathOfTheLichKing]: true,
};

function App() {
  const [, setExpansionID] = useState(ExpansionID.Classic);

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <ThemeProvider theme={WrathDB.theme}>
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
    </IntlProvider>
  );
}

export default App;
