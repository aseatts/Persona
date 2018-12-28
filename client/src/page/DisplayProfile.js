import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import API from "../component/utils/API";
import { ListItem, List, Grid } from "@material-ui/core";
import Button from "../component/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import QRCode from "qrcode.react";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";
//
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class DisplayProfile extends Component {
  state = {
    profileName: "Parkland Nurse",
    jobtTitle: "Nurse II and Parkland",
    yourName: "Katie Ardon",
    companyName: "Parkland Hospital",
    certifications: "RN MRN NPRN",

    jobTitle: "",
    profdetails:
      "AB Initio / Big Data Developer primary review and recommend data modelling approaches, develop Oracle PL/SQL stored processes, Ab Initio, ETL, Unix scripting and Bigdata ETL processes (using Hadoop, HIVE, Spark into automated/functional processes during sprints. Experienced agile scrum master. Specialization in automated system and unit and pre-integration regression acceptance focus on early automation and continuous integration. In depth knowledge local and cloud architecture solutions.  ",
    QRUri: "",
    styles: {
      card: {
        maxWidth: 345
      },
      media: {
        height: 140
      }
    } //   profileTypeName: "Professional",
    //   img: "",
    //   createdDate: "2018-11-14T18:51:11.753Z",
    //   __v: 0
  };

  componentDidMount() {
    API.getprofile(this.props.match.params.id)
      .then((res) => this.setState({ profile: res.data }))
      .catch((err) => console.log(err));
    // With promises
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

  // profileName: "Parkland Nurse",
  // jobtTitle: "Nurse II and Parkland",
  // yourName: "Katie Ardon",
  // companyName: "Parkland Hospital",
  // certifications: "RN ",

  // profdetails:
  //   "AB Initio / Big Data Developer primary review and recommend data modelling approaches, develop Oracle PL/SQL stored processes, Ab Initio, ETL, Unix scripting and Bigdata ETL processes (using Hadoop, HIVE, Spark into automated/functional processes during sprints. Experienced agile scrum master. Specialization in automated system and unit and pre-integration regression acceptance focus on early automation and continuous integration. In depth knowledge local and cloud architecture solutions.  ",
  // QRUri: "",

  render() {
    return (
      <Fragment>
        <Card maxWidth="345">
          {" "}
          <CardActionArea>
            <CardMedia
              className={this.state.styles.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            >
              <QRCode
                value="http://facebook.github.io/react/"
                className={this.state.styles.media}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {this.state.yourName} <h6> {this.state.certifications}</h6>
              </Typography>
              <Typography gutterBottom variant="h5" component="h3">
                {this.state.companyName}
              </Typography>
              <Typography component="p">{this.state.profdetails}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              @LinkedIn
            </Button>
            <Button size="small" color="primary">
              @contactMe
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
}
export default DisplayProfile;
