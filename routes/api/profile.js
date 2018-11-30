const router = require("express").Router();
const profileController = require("../../controllers/profileController");
router.get("/", profileController.getAllProfileTypes);
//router.route("/").get(profileController.getAllProfileTypes);

module.exports = router;
