import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./page/Login";
import CreateNewUser from "./page/CreateNewUser";
import LogIn from "./component/login/LogIn";
import DisplayProfile from "./page/DisplayProfile";
import ProfileType from "./page/ProfileType";
import ProfileConfiguration from "./page/ProfileConfiguration";
import NavBar from "./component/NavBar";
import Background from "./css/Background/BG_awake.png";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./App.css";
// import "./css/index.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Login}>
                <ButtonBase />
              </Route>
              {/* The first path [1]x = the existing user path*/}

              <Route exact path="/10" component={LogIn} />
              <Route exact path="/15" component={DisplayProfile} />
              {/* The first path [2]x = the existing user path*/}
              <Route exact path="/20" component={CreateNewUser} />
              <Route exact path="/25" component={ProfileConfiguration} />
              <Route exact path="/29" component={DisplayProfile} />
              {/* <Route exact path="/profile/" component={ProfileTypes} />
              <Route exact path="/p/" component={DisplayProfile} /> */}
              <Route
                exact
                path="/profile/:id"
                component={ProfileConfiguration}
              />
              <Route component={Router.NoMatch} />
              {/* </div> */}
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
