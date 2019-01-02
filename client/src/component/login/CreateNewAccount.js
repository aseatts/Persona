import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { Redirect, Push } from "react-router";
import API from "../../component/utils/API";
import "../../css/index.css";
import Button from "../Button";
import Bcrypt from "bcryptjs";
// import Grid from "@material-ui/core/Grid";

import {
  FormControl,
  FormLabel,
  TextField,
  Fade,
  ButtonBase,
  MenuItem,
  Select
} from "@material-ui/core";

// import createMuiTheme from "../component/Mui";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import { CSSTransition } from "react-transition-group";
// import white from "@material-ui/core/colors/";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";

class CreateNewAccount extends Component {
  import;
  state = {
    userName: "",
    userPW: "",
    userPW2: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.userPW && this.state.userPW) {
      let salt = Bcrypt.genSaltSync(10);
      let pwhash = Bcrypt.hashSync(this.state.userPW, salt);

      API.saveprofile({
        userName: this.state.userName,
        userPW: pwhash
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .then(this.props.history.push("/25"));
    }
  };

  captureInput = (name) => (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  captureInput = (name) => (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlecheckExisting = (check) => {
    this.setState({ check: true });
  };

  handlecheckNew = (check) => {
    this.setState({ check: false });
  };

  handleChange = (name) => (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    let pass2 = this.state.userPW2;
    let pass1 = this.state.userPW;
    let res = pass1.substr(0, pass2.length + 1);

    console.log(res + "," + pass1 + "," + pass2);

    let checkme = (res, pass2) => {
      res = pass2;
      // console.log(res + " " + pass2);
      checkme();
      if (res !== pass2) return <Button>Error</Button>;
    };

    // handleChange = (name) => (event) => {
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   });
    //   {
    //     let pass2 = this.state.passPW2;
    //     let pass1 = this.state.passPW;
    //     let res = pass1.substr(0, pass2.length);
    //     let checkme = (res, pass2) => {
    //       console.log(res + " " + pass2);
    //     };

    // checkme(res, pass2);
    // if (res !== pass2) return <Button>Error</Button>;
    // }
  };
  render() {
    return (
      <Fragment>
        <div>
          <Fade in={true} mountOnEnter unmountOnExit>
            <div className="CenterMe">
              <h1> Welcome to Persona</h1>

              <FormControl>
                <FormLabel>
                  <TextField
                    id="userName"
                    label="User Name"
                    style={{ margin: 8 }}
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.captureInput("userName")}
                    margin="normal"
                    name="userName"
                  />
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="userPW"
                    label="Password "
                    style={{ margin: 8 }}
                    value={this.state.userPW}
                    onChange={this.captureInput("userPW")}
                    type="password"
                    margin="normal"
                    name="userPW"
                  />{" "}
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="userPW2"
                    label="Re-enter the Password"
                    style={{ margin: 8 }}
                    value={this.state.userPW2}
                    onChange={this.handleChange("userPW2")}
                    type="password"
                    margin="normal"
                    name="userPW2"
                  />{" "}
                </FormLabel>
                {/* <Button>
                  <a href={"/25"} />k   
                </Button> */}
                <Button
                  id="submit"
                  label="submitButton"
                  style={{ margin: 8 }}
                  // href="/29"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </Button>
              </FormControl>
            </div>
          </Fade>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(CreateNewAccount);
