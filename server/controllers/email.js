const Sequelize = require("sequelize");
const Email = require("../models").Email;

exports.create = (email) => {
	return Email.create(email);
};











const AWS = require("aws-sdk");
const fs = require('fs');

const contactAddress = "APEX Contact Team <contact@apexinspection.com>";
const templatePath = "./server/templates/";

const email = {
	contact: {
		response: {
			html: templatePath + "form-response.html",
			subject: "Thanks for contacting APEX!",
		},
		notification: {
			html: templatePath + "form-notification.html",
			subject: "New Website Contact"
		}		
	},
	subscribe: {
		response: {
			html: templatePath + "subscription-response.html",
			subject: "Thanks for subscribing to our newsletter!",
		},
		notification: {
			html: templatePath + "subscription-notification.html",
			subject: "New Newsletter Subscription"
		}
	}
};

exports.send = function(request, response, next) {

	if (!(request.body.form === "contact" || request.body.form === "subscribe")) {

		response.status(400).send("Invalid Form Type");

	} else {

		var wellFormedRequest = false;

		if (request.body.form === "contact") {

			if (request.body.name && request.body.email && request.body.subject && request.body.message) {
				wellFormedRequest = true;
			} else {
				response.status(400).send("Missing One of the Following Parameters: name, email, subject, message");
			}

		}

		if (request.body.form === "subscribe") {

			if (request.body.email) {
				wellFormedRequest = true;
			} else {
				response.status(400).send("Missing Required Parameter: email");
			}

		}

		if (wellFormedRequest) {

			AWS.config.update({ region: "us-west-2" });
	
			var toAddress = request.body.email;
			var subject = email[request.body.form].response.subject;
			var body = populateValues(request, fs.readFileSync(email[request.body.form].response.html, "utf-8"));

			dispatchEmail(toAddress, subject, body).then(() => {
				
				toAddress = contactAddress;
				subject = email[request.body.form].notification.subject;
				body = populateValues(request, fs.readFileSync(email[request.body.form].notification.html, "utf-8"));

				dispatchEmail(toAddress, subject, body).then(() => {
					response.status(200).send("OK");
				});

			});

		}

	}

};

function populateValues(request, body) {

	body = body
		.replace("%NAME%", request.body.name)
		.replace("%EMAIL%", request.body.email)
		.replace("%SUBJECT%", request.body.subject)
		.replace("%MESSAGE%", request.body.message);

	return body;

};

function dispatchEmail(toAddress, subject, body) {

	const params = {
	  Source: contactAddress,
	  Destination: { 
	    ToAddresses: [toAddress]
	  },
	  Message: {
	    Subject: {
      	Charset: "UTF-8",
      	Data: subject
      },
	    Body: {
	      Html: {
	      	Charset: "UTF-8",
	      	Data: body
	      }
	    }
	  },
	};

	return new AWS.SES({apiVersion: "2010-12-01"}).sendEmail(params).promise();

};