const Sequelize = require("sequelize");
const Place = require("../models").Place;
const People_Places = require("../models").People_Places;

exports.create = place => {
	return Place.create(place);
};

exports.associateWithPerson = (personID, placeID, isPrimary) => {
	return People_Places.create({
		person_id: personID,
		place_id: placeID,
		is_primary: isPrimary
	});
};