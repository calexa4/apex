const Sequelize = require("sequelize");
const Phone = require("../models").Phone;

exports.create = phone => {
	return Phone.create(phone);
};