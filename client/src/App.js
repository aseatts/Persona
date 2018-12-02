import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfileTypes from "./page/ProfileType";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={ProfileTypes} />

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
