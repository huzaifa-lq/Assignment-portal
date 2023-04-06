const express = require("express");
const {
    createTextQuestion, updateTextQuestion,
} = require("../controllers/textQuesController");

const router = express.Router();

router.route("/textQuestion").post(isAuthenticatedUser, createTextQuestion);
router.route("/textQuestion").put(isAuthenticatedUser, updateTextQuestion);

module.exports = router;