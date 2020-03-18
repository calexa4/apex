const Sequelize = require("sequelize");
const Person = require("../models").Person;

exports.create = (person) => {
	return Person.create(person);
};