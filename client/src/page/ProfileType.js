import React, { Component, Fragment } from "react";

import API from "../component/utils/API";
import { ListItem, List, Grid } from "@material-ui/core";
import Button from "../component/Button";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

class profileType extends Component {
  state = {
    profTypes: []
    //   _id: "5bec6e9f45b6665b3089ea43",
    //   profileTypeName: "Professional",
    //   img: "",
    //   createdDate: "2018-11-14T18:51:11.753Z",
    //   __v: 0
  };
  componentDidMount() {
    this.getprofTypes();
  }
  getprofTypes = () => {
    API.getprofileTypes()
      .then((res) => this.setState({ profTypes: res.data }))
      .catch((err) => console.log(err));
  };

  // loadProfileTypes = () => {
  //   API.getprofiles()
  //     .then((res) =>
  //       this.setState({
  //         profTypes: res.data
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // };

  classes = this.props;

  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <List>
              {this.state.profTypes.map((profiles) => {
                return (
                  <ListItem alignItems="flex-start" key={profiles._id}>
                    <a href={"/profile/" + profiles._id}>
                      <Button> {profiles.profileTypeName} </Button>
                    </a>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default profileType;
