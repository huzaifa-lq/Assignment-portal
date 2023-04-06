const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
resetPassword,
addAssignment,
getAssignments,
updateAssignment,
getAllAssignments,
deleteUser,
deleteAssignment} = require("../controllers/userController");
const {isAuthenticatedUser,
  authorizedRoles} = require("../middleware/auth")
  const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);
router.route("/password/forgot").post(isAuthenticatedUser, forgotPassword);
router.route("/password/reset/:token").put(isAuthenticatedUser, resetPassword);
// router.route("/assignment/add").post(isAuthenticatedUser, addAssignment)
router.route("/assignment").get(isAuthenticatedUser, getAssignments);
router.route("/assignment").put(isAuthenticatedUser, updateAssignment);
router.route("/assignment/all").get(isAuthenticatedUser,authorizedRoles("Admin"),getAllAssignments);
router.route("/user/delete").post(isAuthenticatedUser, authorizedRoles("Admin"), deleteUser);
router.route("/assignment/delete").post(isAuthenticatedUser, authorizedRoles("Admin"), deleteAssignment);

module.exports = router;