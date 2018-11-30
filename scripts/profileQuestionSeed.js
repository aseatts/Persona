const mongoose = require("mongoose");
const ProfileQuestion = require("../models/profileQuestion");
// const Schema = mongoose.Schema;
// This file empties the Books collection and inserts the books below

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Personav_010");

// const ProfileTypeSchema = new mongoose.Schema({
//   profileTypeName: { type: String, required: true },
//   img: { type: String },
//   createdDate: { type: Date, default: Date.now }
// });

// const ProfileType = mongoose.model("ProfileType", ProfileTypeSchema);
// // module.exports = ProfileType;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/persona_v010");

const ProfileQuestionSeed = [
  {
    label: "FreeTime Hobby",
    value: "FreeTime Hobby",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "default(50 char)"
  },
  {
    label: "Astrological Sign",
    value: "Astrological Sign",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "list{}"
  },
  {
    label: "AnonEmail",
    value: "AnonEmail",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "default(255 char)"
  },
  {
    label: "Current Obession",
    value: "Current Obession",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Cats are …",
    value: "Cats are …",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Dogs are …",
    value: "Dogs are …",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Cows are …",
    value: "Cows are …",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Tofu…",
    value: "Tofo…",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Top 2 Favorite Movies",
    value: "Top 2 Favorite Movies",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 Favorite songs",
    value: "Top 2 Favorite songs",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 favorite places",
    value: "Top 2 favorite places",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 ways to stay Active",
    value: "Top 2 ways to stay Active",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 things that keep you sane",
    value: "Top 2 things that keep you sane",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Game of Thrones",
    value: "Game of Thrones is...",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "The Kardashians",
    value: "The Kardashians",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Kimye is",
    value: "Kimye is",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "SSDL"
  },
  {
    label: "Top 2 ways to stay active",
    value: "Top 2 ways to stay active",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 Favorite forms of Art",
    value: "Top 2 Favorite forms of Art",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "2responseboxes"
  },
  {
    label: "Favorite Art Venue",
    value: "Favorite Art Venue",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "default(255 char)"
  },
  {
    label: "Favorite New Artist",
    value: "Favorite New Artist",
    isSocialSafe: true,
    isProfessionalSafe: false,
    isAllProfilesSave: false,
    r_type: "default(255 char)"
  },
  {
    label: "Current Genre Style Obession",
    value: "Current Genre Style Obession",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(50 char)"
  },
  {
    label: "What do you do professionally",
    value: "What do you do professionally",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(50 char)"
  },
  {
    label: "What do you want to do professionally?",
    value: "What do you want to do professionally?",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(255 char)"
  },
  {
    label: "What are you studying?",
    value: "What are you studying?",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(50 char)"
  },
  {
    label: "What are you reading?",
    value: "What are you reading?",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(50 char)"
  },
  {
    label: "Most Recent Project",
    value: "Most Recent Project",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(255 char) multiline"
  },
  {
    label: "Next Big Thing",
    value: "What is the next big thing?",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "default(50 char)"
  },
  {
    label: "LinkedIn Profile",
    value: "LinkedIn Profile",
    isSocialSafe: false,
    isProfessionalSafe: true,
    isAllProfilesSave: false,
    r_type: "URL"
  },
  {
    label: "PersonalWebsiteURL",
    value: "Personal Website URL",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Yelp Reviews",
    value: "Yelp Reviews URL",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Amazon Wish List",
    value: "Amazon Wish List",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Alias Name",
    value: "Alias Name",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Facebook Profile",
    value: "Facebook Profile",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Spotify",
    value: "Instagram ",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Instagram ",
    value: "Spotify",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  },
  {
    label: "Snapchat",
    value: "Snapvalue",
    isSocialSafe: true,
    isProfessionalSafe: true,
    isAllProfilesSave: true,
    r_type: "URL"
  }
];

ProfileQuestion.deleteMany()
  .then(() => ProfileQuestion.insertMany(ProfileQuestionSeed))
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
