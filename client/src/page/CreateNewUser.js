import React, { Component, Fragment, LinkTo } from "react";
// import bcrypt from "bcrypt";
import API from "../component/utils/API";
import { ListItem, List, Grid } from "@material-ui/core";
import Button from "../component/Button";
import TextField from "@material-ui/core/TextField";
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
      newUserResInfo: [],
      userID: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  loadProfiles = () => {
    API.getUserProfiles(this.state.userName)
      .then((response) =>
        this.setState({
          newUserResInfo: response
        })
      )
      .then(console.log(this.state))
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
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid alignitems="flex-start" itemxs={12}>
            {/* <Button> {this.state.profile.profileTypeName} </Button> */}
            <form>
              {" "}
              <Grid item xs={6}>
                <TextField
                  id="userName"
                  label="UserName"
                  inputtype="String"
                  style={{ margin: 8 }}
                  placeholder="User"
                  value={this.state.userName}
                  onChange={this.handleChange("userName")}
                  margin="normal"
                  name="userName"
                />
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
                {/* <TextField
                    id="userPW2"
                    label="userPW2"
                    style={{ margin: 8 }}
                    value={this.state.userPW2.toString()}
                    onChange={this.handleChange("userPW2")}
                    margin="normal"
                    name="userPW2"
                  /> */}

                <Button
                  id="submit"
                  label="submitButton"
                  inputtype="String"
                  style={{ margin: 8 }}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default CreateNewUser;
