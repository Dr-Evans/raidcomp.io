import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RaidCompPage } from "./pages/raid-comp";
import { ExpansionID } from "./models";
import { IntlProvider } from "react-intl";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

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
            <Route path={"/:expansionID"} children={() => <RaidCompPage />} />
          </Switch>
        </Router>
      </DndProvider>
    </IntlProvider>
  );
}

export default App;
