require("dotenv").config(); //get secret keys from env files
const algosdk = require("algosdk"); // use algorand Javascript SDK
const fetch = require("node-fetch"); // use fetch library for http requests

const apiKey = process.env.PURESTAKE_API_KEY; // API key given in purestake account
const baseAccKey = process.env.BASE_ACC_KEY; // API key of sender account

const baseServer =
	"https://testnet-algorand.api.purestake.io/idx2/v2/accounts/" + baseAccKey;

const port = "";
const token = {
	"X-API-key": apiKey,
};

////////////////////////////////////////////
//	using indexer to fetch account details
////////////////////////////////////////////

let indexerClient = new algosdk.Indexer(token, baseServer, port);

(async () => {
	let accountInfo = await indexerClient.lookupAccountByID(baseAccKey).do();
	// console.log(accountInfo);
})().catch((e) => {
	console.log(e);
});

//////////////////////////////////////////////////////
// using simple fetch api to fetch account details...
//////////////////////////////////////////////////////

// (async () => {
// 	const response = await fetch(baseServer, {
// 		headers: {
// 			"X-API-key": apiKey,
// 		},
// 	});

// 	var data = await response.json();

// 	console.log(data);
// })().catch((e) => {
// 	console.log(e);
// });

//////////////////////////////////////////////
//	using algo to fetch account details...
//////////////////////////////////////////////

// const server = "https://testnet-algorand.api.purestake.io/ps2";
// const port = "";
// const token = {
// 	"x-api-key": apiKey,
// };

// let client = new algosdk.Algodv2(token, server, port);

// (async () => {
// 	let alice_account_info = await client.accountInformation(baseAccKey).do();
// 	console.log("Asset of Alice: ");
// 	console.log(alice_account_info.assets);
// })().catch((e) => {
// 	console.log(e);
// });
