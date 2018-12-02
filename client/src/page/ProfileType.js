import React, { Component } from "react";

import API from "../component/utils/API";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

class profileTypes extends Component {
  state = {
    profTypes: {}
  };
  componentDidMount() {
    this.getprofTypes();
    console.log(this.state.profTypes);
  }
  getprofTypes = () => {
    API.getprofileTypes()
      .then((res) => this.setState({ profTypes: res.data }))
      .catch((err) => console.log(err));
    console.log(API.getprofileTypes);
  };

  loadProfileTypes = () => {
    API.getprofiles()
      .then((res) =>
        this.setState({
          profileTypes: res.json
        })
      )
      .catch((err) => console.log(err));
  };

  // state = {
  //   profTypes: [
  //     { id: 1, name: "dating" },
  //     { id: 2, name: "medwordical" },
  //     { id: 3, name: "action" },
  //     { id: 4, name: "dance" }
  //   ]
  // };
  classes = this.props;

  //}

  render() {
    return (
      <div>
        {" "}
        <p>123</p>
      </div>
    );
  }
}
export default profileTypes;
