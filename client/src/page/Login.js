import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import API from "../api/utils/API";
import LogIn from "../component/login/LogIn";
import CreateNewAccount from "../component/login/CreateNewAccount";

import App from "../App";

//
// import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";

import { FormLabel, Input, Fade, CssBaseline } from "@material-ui/core";

// import createMuiTheme from "../component/Mui";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import { CSSTransition } from "react-transition-group";
// import white from "@material-ui/core/colors/";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";
let fmTypeSwitch = 1;

class Welcome extends Component {
  import;

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleCreateAccountClick() {
    this.setState({ isLoggedIn: false });
  }

  handleSignUp = (event) => {
    event.preventDefault();
    console.log("I'm signing up baby", this.state);
    API.signup(this.state).then(function(response) {
      console.log(response);
    });
  };
  captureInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlecheckNew = () => {
    fmTypeSwitch = fmTypeSwitch * -1;
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = (
        <div>
          <LogIn />
          <ButtonBase onClick={this.handleCreateAccountClick}>
            New User
          </ButtonBase>
        </div>
      );
    } else {
      button = (
        <div>
          {" "}
          <CreateNewAccount />
          <ButtonBase onClick={this.handleLoginClick}>Existing User</ButtonBase>
        </div>
      );
    }
    return (
      <div>
        <div>{button}</div>
      </div>
    );
  }
}

export default Welcome;
