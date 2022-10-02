import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RaidCompPage } from "./pages/raid-comp";
import { ExpansionID, getExpansion, getExpansionID } from "./models";
import { IntlProvider } from "react-intl";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const supportedExpansions = {
  [ExpansionID.WrathOfTheLichKing]: true,
};

function App() {
  const [, setExpansionID] = useState(ExpansionID.Classic);

  return (
    <IntlProvider locale="en" defaultLocale="en">
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
                    expansion={getExpansion(
                      getExpansionID(match!.params.expansionID)
                    )}
                  />
                ) : (
                  <Redirect to={"/"} />
                )
              }
            />
          </Switch>
        </Router>
      </DndProvider>
    </IntlProvider>
  );
}

export default App;
