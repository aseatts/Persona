import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import API from "../component/utils/API";
const styles = (theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class ControlledOpenSelect extends React.Component {
  state = {
    profileTypeName: "",
    open: false,
    profTypes: []
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  componentDidMount() {
    this.getprofTypes();
  }

  getprofTypes = () => {
    API.getprofileTypes()
      .then((res) => this.setState({ profTypes: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Profile Type
            </InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.profileTypeName}
              onChange={this.handleChange}
              inputProps={{
                name: "profileTypeName",
                id: "demo-controlled-open-select"
              }}
            >
              {this.state.profTypes.map((profiles) => {
                return (
                  <MenuItem
                    alignItems="flex-start"
                    key={profiles._id}
                    value={profiles.profileTypeName}
                  >
                    {" "}
                    {profiles.profileTypeName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledOpenSelect);
