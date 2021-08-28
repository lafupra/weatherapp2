const express = require("express");
const router  = express.Router();
const controller = require("./controller/controll");







router.get ("/",controller.page);
router.post("/",controller.cityweather);




module.exports = router