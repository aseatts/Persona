const db = require("../models");
console.log(__filename);
// Defining methods for the booksControllercd
module.exports = {
  insertProfileDetail: function(req, res) {
    db.profileDetail
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
