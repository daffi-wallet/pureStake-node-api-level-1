require("dotenv").config();
const algosdk = require("algosdk");
const fetch = require("node-fetch");

const apiKey = process.env.PURESTAKE_API_KEY;
const baseAccKey = process.env.BASE_ACC_KEY;

const baseServer =
	"https://testnet-algorand.api.purestake.io/idx2/v2/accounts/" + baseAccKey;

const port = "";
const token = {
	"X-API-key": apiKey,
};

let indexerClient = new algosdk.Indexer(token, baseServer, port);

////////////////////////////////////////////
//	using indexer to fetch account details
////////////////////////////////////////////

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
