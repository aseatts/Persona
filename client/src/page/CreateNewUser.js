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
      newUserDetails: {
        userName: "",
        userPW: "",
        saltRounds: 10
      },
      newUserResInfo: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.createNewUser({
      userName: this.state.value,
      userPW: this.state.value,
      userEmail: this.state.value
    });
    this.test();
    // .then((res) => this.setState({ newUserResInfo: res.data.json }))
  };

  test = (handleFormSubmit) => {
    const milk = handleFormSubmit.console.log(Response);
    return milk;
  };
  // loadProfileTypes = () => {
  //   API.getprofiles()
  //     .then((res) =>
  //       this.setState({
  //         profTypes: res.data
  //       })
  //     )
  //     .catch((err) => console.log(err));

  // hashPw = (
  //   myPlaintextPassword = this.state.userPW,
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
                  value={this.state.name}
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
