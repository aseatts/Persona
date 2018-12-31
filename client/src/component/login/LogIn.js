import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import API from "../../api/utils/API";
//
// import Grid from "@material-ui/core/Grid";
import Button from "../Button";
import Grid from "@material-ui/core/Grid";

import {
  FormControl,
  FormLabel,
  Input,
  Fade,
  CssBaseline,
  ButtonBase
} from "@material-ui/core";

// import createMuiTheme from "../component/Mui";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import { CSSTransition } from "react-transition-group";
// import white from "@material-ui/core/colors/";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";

class LogIn extends Component {
  import;
  state = {
    UserInputs: {
      username: "",
      password: ""
    },
    LoginStyles: { Color: "white", textAlign: "center" }
  };

  render() {
    return (
      <Fragment>
        <Grid containter>
          <Grid container spacing={24}>
            <Grid alignItems="flex-start" item xs={12}>
              <h1> Welcome Back</h1>
              <FormControl>
                <Input
                  className="spaceme"
                  justify="center"
                  id="UserName"
                  placeholder="UserName"
                  fullWidth={true}
                />
                <Input
                  justify="center"
                  id="Password"
                  placeholder="Password"
                  fullWidth={true}
                  to="/"
                />

                <Button
                  id="submit"
                  label="submitButton"
                  style={{ margin: 8 }}
                  href={"/15"}
                >
                  Submit{" "}
                </Button>
              </FormControl>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default LogIn;
