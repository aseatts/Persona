import React, { Component, Fragment, Link } from "react";
// import bcrypt from "bcrypt";
import API from "../component/utils/API";
import {
  ListItem,
  List,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Fade,
  TextField
} from "@material-ui/core";

import Button from "../component/Button";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";
class CreateNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPW: "",
      saltRounds: 10,
      newUserResInfo: "",
      userID: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  loadProfiles = () => {
    API.getUserProfiles(this.state.userName)
      .then((response) =>
        this.setState({
          newUserResInfo: response.data._id
        })
      )
      .then(console.log(this.state))
      .then(console.log("/profile/" + this.state.newUserResInfo))

      .catch((err) => console.log(err));
  };

  handleChange = (name) => (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  // this is stuck where is cannot see the .then
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName && this.state.userPW && this.state.userEmail) {
      API.createNewUser({
        userName: this.state.userName,
        userPW: this.state.userPW,
        userEmail: this.state.userEmail
      }).then(() => this.loadProfiles());
    }
  };

  //     .then((res) =>
  //       this.setState({
  //         profTypes: res.data
  //       })
  //     )
  //     .catch((err) => console.log(err));

  // hashPw = (  //   myPlaintextPassword = this.state.userPW,
  //   salt = this.state.setState
  // ) => {

  //     .hash(myPlaintextPassword, salt)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  render() {
    const jazz = () => this.state;
    return (
      <Fragment>
        <div class="CenterMe">
          <Grid container spacing={24}>
            <Grid alignitems="flex-start" itemxs={12}>
              <FormControl>
                <FormLabel fullWidth={true}>
                  Provide a Name for you new profile?
                  <Input
                    id="userName"
                    label="UserName"
                    inputtype="String"
                    placeholder="User123"
                    fullWidth={true}
                    value={this.state.userName}
                    onChange={this.handleChange("userName")}
                    name="userName"
                  />{" "}
                  <TextField
                    id="userEmailAddress"
                    label="userEmailAddresss"
                    inputtype="text"
                    style={{ margin: 8 }}
                    placeholder="you@somemail.com"
                    value={this.state.userEmail}
                    onChange={this.handleChange("userEmail")}
                    margin="normal"
                    name="userEmail"
                  />
                  <TextField
                    id="userPW"
                    label="userPW"
                    inputtype="text"
                    style={{ margin: 8 }}
                    value={this.state.userPW}
                    onChange={this.handleChange("userPW")}
                    margin="normal"
                    name="userPW"
                  />
                </FormLabel>
              </FormControl>
              <Button>
                <a href={"/25"}>
                  <h1> Submit</h1>
                </a>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default CreateNewUser;
