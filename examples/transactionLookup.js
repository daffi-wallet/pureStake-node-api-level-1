require("dotenv").config();
const algosdk = require("algosdk");
const fetch = require("node-fetch");

const apiKey = process.env.PURESTAKE_API_KEY;
const baseAccKey = process.env.BASE_ACC_KEY;

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
