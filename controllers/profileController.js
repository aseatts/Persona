const db = require("../models");
console.log(__filename);
// Defining methods for the booksControllercd
module.exports = {
  // get: function(req, res) {
  //   Profiles.find(req.query)
  //     .sort({ date: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  getAllProfileTypes: function(req, res) {
    db.profiletypes
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .then(console.log("res"))
      .catch((err) => res.status(422).json(err));
    // getAllProfileTypes: function(req, res) {
    //   `https://jsonplaceholder.typicode.com/users`(req.query)
    //     .then((dbModel) => res.json(dbModel))
    //     .catch((err) => res.status(422).json(err));

    // .then((dbModel) => console.log(dbModel));

    // ProfileType.find()
    //   .sort({ date: -1 })
    //   .then((ProfileType) => res.json(ProfileType))
    //   .catch((err) => res.status(422).json(err));
  }
};
