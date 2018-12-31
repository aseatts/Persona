import React, { Component, Fragment } from "react";

import LogIn from "../component/login/LogIn";
import CreateNewAccount from "../component/login/CreateNewAccount";

//
// import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

// import createMuiTheme from "../component/Mui";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import { CSSTransition } from "react-transition-group";
// import white from "@material-ui/core/colors/";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";

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
