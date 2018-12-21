const router = require("express").Router();
const profileController = require("../../controllers/profileController");

//   .post("/", profileController.getAllProfileTypes);
router.get("/", profileController.getUserProfiles);
router.get("/:userName", profileController.getUserProfiles);

//router.route("/").get(profileController.getAllProfileTypes);

module.exports = router;
