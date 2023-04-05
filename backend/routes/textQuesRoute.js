const express = require("express");
const {
    createTextQuestion, updateTextQuestion,
} = require("../controllers/textQuesController");

const router = express.Router();

router.route("/textQuestion").post(createTextQuestion);
router.route("/textQuestion").put(updateTextQuestion);

module.exports = router;