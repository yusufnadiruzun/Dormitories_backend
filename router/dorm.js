
const express = require('express')
const router = express.Router()
const  {getData}  = require("../controller/getdata");
const  {addData}  = require("../controller/addData");

router.get("/v1/getData", getData);
router.post("/v1/addData", addData);

module.exports = router;