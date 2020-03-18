const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const validate = require("../utilities/validateJson");
const path = require("path");

router.post(
	"/user/secret",
	validate("user-secret.json"),
	controllers.user.generateSecretKey
);

router.get("/json-schema/*", function (request, response) {
	response.sendFile(path.join(__dirname, "../json-schema/" + path.basename(request.url)));
});
  
module.exports = router;