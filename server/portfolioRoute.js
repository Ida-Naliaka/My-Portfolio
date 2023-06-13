const express = require("express");
const { NewProfile, getPortfolio, getResume, NewResume } = require("./Controller");
const router = express.Router();

router.route("/").post(NewProfile);
router.route("/").get(getPortfolio);
router.route("/resume").get(getResume);
router.route("/resume").post(NewResume);
module.exports = router;
