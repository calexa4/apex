const express = require("express");
const router = express.Router();
const controllers = require("../controllers"); 
const validate = require("../utilities/validateJson");

router.post(
	"/", 
	validate("document-validate.json"),
	controllers.document.getDownloadUrl
);
  
module.exports = router;