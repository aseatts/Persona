const mongoose = require("mongoose");
const ProfileUser = require("../models");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Persona_v010");

const ProfileUserSeed = [
  {
    username: "adam",
    password: "1234"
  }
];

ProfileUser.deleteMany({})
  .then(() => ProfileUser.collection.insertMany(ProfileUserSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
