const express = require("express");
const { NewProfile, getPortfolio } = require("./Controller");
const router = express.Router();

router.route("/").post(NewProfile);
router.route("/").get(getPortfolio);
module.exports = router;
