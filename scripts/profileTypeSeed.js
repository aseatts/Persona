const mongoose = require("mongoose");
const ProfileType = require("../models");
// This file empties the Books collection and inserts the books below

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Persona_v010");

const ProfileTypeSeed = [
  { profileTypeName: "Professional", img: "" },
  { profileTypeName: "Spirtual", img: "" },
  { profileTypeName: "Artist", img: "" },
  { profileTypeName: "Parent", img: "" },
  { profileTypeName: "Student", img: "" },
  { profileTypeName: "Special", img: "" }
];

ProfileType.deleteMany()
  .then(() => ProfileType.insertMany(ProfileTypeSeed))
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
