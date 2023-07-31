const express = require("express");
const router = express.Router();

const auth = require("./auth");
const dorm = require("./dorm");
router.use("/auth",auth);
router.use("/dorm",dorm);
module.exports = router;