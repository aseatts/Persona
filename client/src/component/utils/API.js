import axios from "axios";
// import cors from "cors";
// import { config } from "rxjs";
// var corsOptions = {
//   origin: "http://localhost:8080/",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

export default {
  // getprofiles: function() {
  //   return axios.get("/api/profile");
  // },
  // // Gets the profile with the given id
  // getprofile: function(id) {
  //   return axios.get("/api/profile/" + id);
  // },
  getprofile: function(id) {
    const data = axios.get("/api/profile/");
    console.log(data);
    return data;
  },
  saveprofile: function(profileData) {
    const data = axios.post("/api/profile/userProfile", profileData);
    console.log(profileData);
    return data;
  },
  getUserProfiles: function(userName) {
    return axios.get("/api/userProfile", userName).then(function(response) {
      console.log(response);
      return response;
    });
  },
  createNewUser: function(userData) {
    return axios
      .post("/api/profile/createUserProfile", userData)
      .then(function(response) {
        return response;
      });
    // .post("/api/profile/createUserProfile", userData)
    // .then((response) => {

    //   return response;
  },

  // // Saves a profile to the database
  // saveprofile: function(profileData) {
  //   return axios.post("/api/profile", profileData);
  // },
  // // gets the associate profile qestions, based on the profile type selected.
  // getprofileQuestions: function(id) {
  //   return axios.get("/api/profile/questions" + id);
  // },
  // // links profiles to the users choic in questions.
  // linkprofileQuestions: function(id) {
  //   return axios.get("/api/profile/linkquestions" + id);
  // },

  // gets the profile types
  getprofileTypes: function() {
    const data = axios.get("/api/profile");
    console.log(data);
    return data;
  }
};
//   getprofileTypes: function() {
//     const x = axios({
//       method: "fetch",
//       url: "/api/profile/",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json"
//       }
//     });
//     console.log(x);
//     return x;
//   }
// };
