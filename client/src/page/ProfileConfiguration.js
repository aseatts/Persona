import React, { Component, Fragment } from "react";

import API from "../component/utils/API";
import { ListItem, List, Grid } from "@material-ui/core";
import Button from "../component/Button";
import TextField from "@material-ui/core/TextField";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

class profileTypes extends Component {
  state = {
    profile: [],
    profileTypeId: this.props.match.params.id,
    personaName: "",
    companyName: "",
    jobTitle: ""
    //   profileTypeName: "Professional",
    //   img: "",
    //   createdDate: "2018-11-14T18:51:11.753Z",
    //   __v: 0
  };
  componentDidMount() {
    API.getprofile(this.props.match.params.id)
      .then((res) => this.setState({ profile: res.data }))
      .catch((err) => console.log(err));
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.personaName && this.state.companyName) {
      API.saveProfile({
        profileTypeId: this.props.match.params.id,
        personaName: this.state.personaName,
        companyName: this.state.companyName,
        jobTitle: this.state.jobTitle
      })
        .then((res) => this.loadProfiles())
        .catch((err) => console.log(err));
    }
  };
  classes = this.props;

  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Button> {this.state.profile.profileTypeName} </Button>
            <form>
              {" "}
              <Grid item xs={2}>
                <TextField
                  id="personaName"
                  label="Persona Name"
                  style={{ margin: 8 }}
                  placeholder="Maedre"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  name="personaName"
                />
                <TextField
                  id="standard-name"
                  label="Company Name"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  name="companyName"
                />
                <TextField
                  id="standard-name"
                  label="jobTitle"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  name="jobTitle"
                />
                <TextField
                  id="standard-name"
                  label="LinkedIn Profile URL"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  fullWidth
                  onChange={this.handleChange("name")}
                  margin="normal"
                  name="LinkedInURL"
                />
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default profileTypes;
