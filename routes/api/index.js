const router = require("express").Router();
const profileRoutes = require("./profile");
console.log(__filename);
router.use("/profile", profileRoutes);

module.exports = router;
