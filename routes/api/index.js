const router = require("express").Router();
const profileRoutes = require("./profile");
const userProfileRoutes = require("./userProfile");
console.log(__filename);
router.use("/profile", profileRoutes);
router.use("/userProfile", userProfileRoutes);
module.exports = router;
