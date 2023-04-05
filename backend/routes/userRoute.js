const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
resetPassword,
addAssignment,
getAssignments,
updateAssignment} = require("../controllers/userController");
const {isAuthenticatedUser} = require("../middleware/auth")
  const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/assignment/add").post(isAuthenticatedUser, addAssignment)
router.route("/assignment").get(getAssignments);
router.route("/assignment").put(updateAssignment);
module.exports = router;