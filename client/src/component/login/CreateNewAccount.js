import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import API from "../../api/utils/API";
import "../../css/index.css";
//
// import Grid from "@material-ui/core/Grid";

import {
  FormControl,
  FormLabel,
  Input,
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
    UserInputs: {
      username: "",
      password: ""
    }
  };

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

  handlecheckExisting = (check) => {
    this.setState({ check: true });
  };

  handlecheckNew = (check) => {
    this.setState({ check: false });
  };

  render() {
    return (
      <Fragment>
        <div>
          <Fade in={true} mountOnEnter unmountOnExit>
            <div className="CenterMe">
              <h1> Welcome to Persona</h1>

              <FormControl>
                <FormLabel fullWidth={true}>Select a profile type</FormLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "Profile Type",
                    id: "profileType"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"professional"}>Professional</MenuItem>
                  <MenuItem value={"social"}>Social</MenuItem>
                  <MenuItem value={"dating"}>Dating</MenuItem>
                </Select>
                <Input id="userName" placeholder="UserName" fullWidth={true} />
                <Input id="Password" placeholder="Password" fullWidth={true} />
                <ButtonBase>
                  <a href={"/25"}>
                    {" "}
                    <h1> Submit</h1>{" "}
                  </a>
                </ButtonBase>
              </FormControl>
            </div>
          </Fade>
        </div>
      </Fragment>
    );
  }
}
export default CreateNewAccount;
