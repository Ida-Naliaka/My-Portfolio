const express = require("express");
const { NewUser, login } = require("./Controller");
const router = express.Router();

router.route("/signup").post(NewUser);
router.route("/login").post(login);
module.exports = router;
