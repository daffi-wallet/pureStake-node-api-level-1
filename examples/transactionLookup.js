require("dotenv").config(); //get secret keys from env files
const algosdk = require("algosdk"); // use algorand Javascript SDK
const fetch = require("node-fetch"); // use fetch library for http requests

const apiKey = process.env.PURESTAKE_API_KEY; // API key given in purestake account
const baseAccKey = process.env.BASE_ACC_KEY; // API key of sender account

const baseServer =
	"https://testnet-algorand.api.purestake.io/idx2/v2/accounts/" +
	baseAccKey +
	"/transactions";

const port = "";
const token = {
	"X-API-key": apiKey,
};

//////////////////////////////////////////////////////
// using simple fetch api to fetch account details...
//////////////////////////////////////////////////////

(async () => {
	const response = await fetch(baseServer, {
		headers: {
			"X-API-key": apiKey,
		},
	});

	var data = await response.json();

	console.log(data);
})().catch((e) => {
	console.log(e);
});
