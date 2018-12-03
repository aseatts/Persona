const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connection.db.createCollection(profileDetails, (err) =>
  console.log(err)
);

const profileDetailSchema = new Schema({
  profileTypeId: { type: Object, required: true },
  name: { type: String, required: true },
  value: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const profileDetail = mongoose.model("ProfileTypes", profileDetailSchema);
module.exports = profileDetail;
