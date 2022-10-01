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
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const supportedExpansions = {
  [ExpansionID.WrathOfTheLichKing]: true,
};

function App() {
  const [, setExpansionID] = useState(ExpansionID.Classic);

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <ThemeProvider theme={WrathDB.theme}>
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
