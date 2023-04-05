const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
resetPassword,
addAssignment} = require("../controllers/userController");

  const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/assignment/add").post(addAssignment)
module.exports = router;