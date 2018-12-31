import React, { Component, Fragment } from "react";
import { Redirect, Push } from "react-router";
import API from "../component/utils/API";
import { Fade, Grid, FormControl, FormLabel } from "@material-ui/core";
import Button from "../component/Button";
import ControlledOpenSelect from "../component/ProfileTypeSelector";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import "../index.css";
import ProfileType from "../page/ProfileType";
import profileType from "../page/ProfileType";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

class profileTypes extends Component {
  state = {
    profile: [],
    userProfiles: [],
    profileTypeId: this.props.match.params.id,
    personaName: "",

    profileTypeName: "Professional",
    personaDetails:
      "AB Initio / Big Data Developer primary review and recommend data modelling approaches, develop Oracle PL/SQL stored processes, Ab Initio, ETL, Unix scripting and Bigdata ETL processes (using Hadoop, HIVE, Spark into automated/functional processes during sprints. Experienced agile scrum master. Specialization in automated system and unit and pre-integration regression acceptance focus on early automation and continuous integration. In depth knowledge local and cloud architecture solutions.  "
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
    console.log(this.state.profileTypeName);
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

        companyName: this.state.companyName,
        jobTitle: this.state.jobTitle,
        linkedInUrl: this.state.linkedIn,
        profileTypeName: this.state.profileTypeName,
        personaDetails: this.state.personaDetails
      })
        .then((res) => console.log(res))
        .then(this.props.history.push("/29"))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Fragment>
        <div className="centerMe">
          <div>
            <ControlledOpenSelect />
            <form>
              {" "}
              <FormControl>
                <FormLabel>
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
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="companyName"
                    label="Company Name"
                    style={{ margin: 8 }}
                    value={this.state.name}
                    onChange={this.handleChange("companyName")}
                    margin="normal"
                    name="companyName"
                  />{" "}
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="jobTitle"
                    label="jobTitle"
                    style={{ margin: 8 }}
                    value={this.state.name}
                    onChange={this.handleChange("jobTitle")}
                    margin="normal"
                    name="jobTitle"
                  />{" "}
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="linkedIn"
                    label="LinkedIn Profile URL"
                    style={{ margin: 8 }}
                    value={this.state.name}
                    onChange={this.handleChange("linkedIn")}
                    margin="normal"
                    name="LinkedInURL"
                  />{" "}
                </FormLabel>
                <FormLabel>
                  <TextField
                    id="linkedIn"
                    label="Profile Details"
                    style={{ margin: 8 }}
                    value={this.state.name}
                    onChange={this.handleChange("linkedIn")}
                    margin="normal"
                    name="Brief Description of what makes this persona special"
                  />{" "}
                </FormLabel>
                <FormLabel>
                  <Button
                    id="submit"
                    label="submitButton"
                    style={{ margin: 8 }}
                    // href="/29"
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </Button>
                </FormLabel>
              </FormControl>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default profileTypes;
