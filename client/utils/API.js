import axios from "axios";

export default {
  // getprofiles: function() {
  //   return axios.get("/api/profile");
  // },
  // // Gets the profile with the given id
  // getprofile: function(id) {
  //   return axios.get("/api/profile/" + id);
  // },
  // // enable/disables a profile with the given id
  // updateprofileStatus: function(id) {
  //   return axios.delete("/api/profile/" + id);
  // },
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
  // // gets the profile types
  getprofileTypes: function() {
    const x = axios.get("/api/profile");
    console.log(x);
    return x;
  }
};
