const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Personav_010");

const profileNameSchema = new mongoose.Schema({
  profileName: { type: String, required: true },
  userid: { type: Schema.Types.ObjectId },
  createdDate: { type: Date, default: Date.now }
});
const ProfileName = mongoose.model("ProfileName", profileNameSchema);
module.exports = ProfileName;
