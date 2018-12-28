import React, { Component, Fragment } from "react";

import API from "../component/utils/API";
import { ListItem, List, Grid } from "@material-ui/core";
import Button from "../component/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

class profileTypes extends Component {
  state = {
    profile: [],
    userProfiles: [],
    profileTypeId: this.props.match.params.id,
    personaName: "",
    companyName: "",
    jobTitle: "",
    PersonaDetails:
      "AB Initio / Big Data Developer primary review and recommend data modelling approaches, develop Oracle PL/SQL stored processes, Ab Initio, ETL, Unix scripting and Bigdata ETL processes (using Hadoop, HIVE, Spark into automated/functional processes during sprints. Experienced agile scrum master. Specialization in automated system and unit and pre-integration regression acceptance focus on early automation and continuous integration. In depth knowledge local and cloud architecture solutions.  "
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
    console.log(this.state);
  };

  loadProfiles = () => {
    API.getUserProfiles(this.props.match.params.id)
      .then((res) => this.setState({ userProfiles: res.data }))
      .catch((err) => console.log(err));
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.personaName && this.state.companyName) {
      API.saveprofile({
        profileTypeId: this.props.match.params.id,
        userid: "",
        personaName: this.state.personaName,
        companyName: this.state.companyName,
        jobTitle: this.state.jobTitle,
        linkedIn: this.state.linkedIn,
        profileTypeName: this.state.profileTypeName
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  classes = this.props;

  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid alignItems="flex-start" item xs={12}>
            <form>
              <Select
                value={this.state.profileTypeName}
                onChange={this.handleChange("profileTypeName")}
                input={
                  <OutlinedInput name="Persona Type" id="outlined-age-simple" />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Business</MenuItem>
                <MenuItem value={20}>Personal</MenuItem>
                <MenuItem value={30}>Social</MenuItem>
              </Select>

              <TextField
                id="profileTypeName"
                label="Profile Name"
                style={{ margin: 8 }}
                value={this.state.profileTypeName}
                onChange={this.handleChange("profileTypeName")}
                margin="normal"
                name="profileTypeNames`"
              />
              <Grid item xs={6}>
                <TextField
                  id="personaName"
                  label="Persona Name"
                  style={{ margin: 8 }}
                  placeholder="Maedre"
                  value={this.state.name}
                  onChange={this.handleChange("personaName")}
                  margin="normal"
                  name="personaName"
                />
                <TextField
                  id="companyName"
                  label="Company Name"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  onChange={this.handleChange("companyName")}
                  margin="normal"
                  name="companyName"
                />
                <TextField
                  id="jobTitle"
                  label="jobTitle"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  onChange={this.handleChange("jobTitle")}
                  margin="normal"
                  name="jobTitle"
                />
                <TextField
                  id="linkedIn"
                  label="LinkedIn Profile URL"
                  style={{ margin: 8 }}
                  value={this.state.name}
                  fullWidth
                  onChange={this.handleChange("linkedIn")}
                  margin="normal"
                  name="LinkedInURL"
                />
                <Button
                  id="submit"
                  label="submitButton"
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
export default profileTypes;
