const express = require("express");
const router = express.Router();
const controllers = require("../controllers"); 
const validate = require("../utilities/validateJson");

router.post(
	"/email/validate", 
	validate("user-email-validate.json"), 
	controllers.user.validateEmail
);

router.post(
	"/access-code/validate", 
	validate("user-access-code-validate.json"), 
	controllers.user.validateAccessCode
);
  
module.exports = router;