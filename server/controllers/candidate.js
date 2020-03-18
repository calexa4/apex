const Sequelize = require("sequelize");
const Candidate = require("../models").Candidate;
const Person = require("../models").Person;
const Phone = require("../models").Phone;
const Email = require("../models").Email;
const Document = require("../models").Document;
const DocumentCategory = require("../models").DocumentCategory;
const Certification = require("../models").Certification;
const Op = Sequelize.Op;

exports.getAll = function (request, response, next) {

	Candidate.findAll({
		attributes: [
			"tagline",
			"summary",
			"highlighted_xp_description",
			"highlighted_xp_company",
			"highlighted_xp_date",
			"zipcode"
		],
		where: {
			is_available: true
		},
		include: [
			{
				model: Person,
				as: "person",
				attributes: ["full_name", "nickname"],
				include: [
					{
						model: Phone,
						as: "phones",
						attributes: ["country_code", "number"]
					},
					{
						model: Email,
						as: "emails",
						attributes: ["address"]
					},
					{
						model: Certification,
						as: "certifications",
						attributes: ["source", "name"],
						through: { 
							attributes: []
						}
					},
					{
						model: Document,
						as: "documents",
						attributes: ["bucket", "key"],
						through: { 
							attributes: []
						},
						include: [{
							model: DocumentCategory,
							as: "documentCategory",
							attributes: [],
							where: {
								name: "Résumé"
							}
						}]
					}
				]
			}],
		order: [
      ["id", "ASC"]
    ],
	}).then(candidates => {

		response.status(200).send(candidates);

	}).catch(sequelizeError => {next(sequelizeError)});

};