import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfileTypes from "./page/ProfileType";
import DisplayProfile from "./page/DisplayProfile";
import CreateNewUser from "./page/CreateNewUser";
import ProfileConfiguration from "./page/ProfileConfiguration";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={DisplayProfile} />
              {/* <Route exact path="/profile/" component={ProfileTypes} />
              <Route exact path="/p/" component={DisplayProfile} /> */}
              <Route exact path="/CreateNewUser/" component={CreateNewUser} />{" "}
              <Route
                exact
                path="/profile/:id"
                component={ProfileConfiguration}
              />
              <Route component={Router.NoMatch} />
              {/* </div> */}
            </Switch>
          </Router>
          /
        </div>
      </React.Fragment>
    );
  }
}

export default App;
