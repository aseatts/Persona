const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.get("/", profileController.getAllProfileTypes);
//   .post("/", profileController.getAllProfileTypes);
router.get("/:id", profileController.getProfileType);
router.post("/createUserProfile", profileController.insertNewUser);
router.get("/:userName", profileController.getUserProfiles);

//router.route("/").get(profileController.getAllProfileTypes);

module.exports = router;
