const Sequelize = require("sequelize");
const User = require("../models").User;
const Person = require("../models").Person;
const Email = require("../models").Email;
const Phone = require("../models").Phone;
const sendSMS = require('../utilities/sendSMS');
const moment = require("moment");
const speakeasy = require("speakeasy");
const qrCode = require("qrcode");

const bcrypt = require("bcrypt");
const saltRounds = 12;

const randomNumber = require("random-number-csprng");
const min = 10000000;
const max = 99999999;

exports.generateSecretKey = (request, response, next) => {

	const secret = speakeasy.generateSecret({ length: 32 });

	const otpAuthUrl = speakeasy.otpauthURL({
		secret: secret.base32,
		label: request.body.email,
		issuer: request.hostname,
		encoding: "base32"
	});

	qrCode.toDataURL(otpAuthUrl, (error, imgDataUrl) => {
		response.status(200).send({
			otpAuthUrl: otpAuthUrl,
			imgDataUrl: imgDataUrl,
			secretKey: secret.base32
		});
	});	

};

exports.validateEmail = function (request, response, next) {
	
	const address = request.body.email.toLowerCase();

	Person.findAll({	
		attributes: ["id", "full_name"],
		include: [
			{
				model: User,
				as: "user",
				required: true,
				attributes: ["id"]
			},
			{
				model: Email,
				as: "emails",
				attributes: ["address"],
				where: {
					address: address
				}
			}, 
			{
				model: Phone,
				as: "phones",
				attributes: ["country_code", "number"],
				where: {
					is_sms_subscribed: true
				}
			}
		]
	}).then(existingPerson => {
		
		if (existingPerson.length === 0) {

			request.httpError
				.setStatus(404)
				.addError("email", "User account not found!", next);

		} else {

			const phone = existingPerson[0].phones[0];
			console.log("Phone:" + phone);
			randomNumber(min, max).then(accessCode => {

				sendSMS(
					phone.country_code + phone.number,
					"APEX Alert: Your access code " + accessCode + " is good for 5 minutes"
				).then(message => {

					const existingUser = existingPerson[0].user;

					existingUser.update({
						access_code: accessCode,
						access_code_expiration: moment().add(5, "minutes")
					}).then(
						response.status(200).send({ 
							"full_name": existingPerson[0].full_name,
							"email": existingPerson[0].emails[0].address,
							"phone": "xxx-xxx-" + phone.number.slice(-4)
						})
					).catch(sequelizeError => {next(sequelizeError)});

				});

			});
				
		}

	}).catch(sequelizeError => {next(sequelizeError)});

};

exports.validateAccessCode = function (request, response, next) {

	const accessCode = request.body.access_code;

	User.find({	
		attributes: ["id","person_id","access_code_expiration"],
		where: {
			access_code: accessCode
		},
		include: [{
			model: Person,
			as: "person",
			attributes: ["id"],
			include: [{
				model: Email,
				as: "emails",
				attributes: ["address"],
				where: {
					is_primary: true
				}
			}]
		}]
	}).then(existingUser => {

		if (!existingUser) {

			request.httpError
				.setStatus(404)
				.addError("access_code", "Access code is invalid!", next);

		} else {

			const expiration = moment(existingUser.access_code_expiration);

			if (expiration.diff(moment()) < 0) {

				request.httpError
					.setStatus(400)
					.addError("access_code", "Access code is expired!", next);				

			} else {

				bcrypt.genSalt(saltRounds).then(sessionId => {

					const sessionExpiration = moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss.SSS Z");

					existingUser.update({
						session_id: sessionId,
						session_expiration: sessionExpiration
					}).then(response.cookie("session", {
						email: existingUser.person.emails[0].address,
						sessionId: sessionId,
						sessionExpiration: sessionExpiration,
						maxAge: 180000000,
					}, {
						domain: request.get('host').split(":")[0],
						httpOnly: true,
						secure: true
					}).status(200).send({ 
						"message": "Login successful!"
					})).catch(sequelizeError => {next(sequelizeError)});;

				});

			}

		}

	}).catch(sequelizeError => {next(sequelizeError)});;

};