const axios = require ("axios");
const url = process.env.GOOGLE_GEOCODE_URL;
const key = process.env.GOOGLE_API_KEY;

class Geocoder
{

	constructor () {}

	geocode(address, options = {}) {
		
		const defaultOptions = { 
			postOfficeBox: null
		};

		const geocodeOptions = {
			...defaultOptions,
			...options
		};

		this.queryAddress = address;
		this.postOfficeBox = geocodeOptions.postOfficeBox;
		
		return axios.get(`${url}?address=${encodeURIComponent(address)}&key=${key}`)
			.then(response => {
				return this.parseResult(response.data.results[0]);
		});

	}

	parseResult(result) {
		this.formattedAddress = result.formatted_address;
		this.setLatLng(result.geometry.location);
		this.components = result.address_components;
		this.isGeocodePartialMatch = result.partial_match ? true : false;
		return this;
	}

	setLatLng(location) {
		this.lat = location.lat;
		this.lng = location.lng;
	}

	getLat() { return this.lat; }
	getLng() { return this.lng; }

	getFormattedAddress() {
		if (this.postOfficeBox) {
			return `PO Box ${this.postOfficeBox}, ${this.formattedAddress}`;
		} else if (this.isGeocodePartialMatch) {
			return this.queryAddress;
		} else {
			return this.formattedAddress;
		}
	}

	getAddressComponent(name) {
		const component = this.components.find(component => {
		  	return component.types.includes(name);
			});
		return component ? component.short_name : null;
	}

}

module.exports = Geocoder;