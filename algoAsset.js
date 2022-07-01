require("dotenv").config();
const apiKey = process.env.PURESTAKE_API_KEY;
const baseAccKey = process.env.BASE_ACC_KEY;

// const algosdk = require("algosdk");
// const baseServer =
// 	"https://testnet-algorand.api.purestake.io/ps2/v2/accounts/K25SKSRLVH4MFN2YQ6E5IAEIFRMT6Q56IXKSLLL6FJNFU7XNH5PNZ4CGAQ";
// const port = "";

// const token = {
// 	Accept: "application/json",
// 	"x-api-key": apiKey,
// };

// let indexerClient = new algosdk.Indexer(token, baseServer, port);

// (async () => {
// 	let assetInfo = await indexerClient.accountInformation().do();
// 	console.log(assetInfo);
// })().catch((e) => {
// 	console.log(e);
// });

const algosdk = require("algosdk");

const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = {
	"x-api-key": apiKey,
};

let client = new algosdk.Algodv2(token, server, port);

(async () => {
	let alice_account_info = await client.accountInformation(baseAccKey).do();
	console.log("Asset of Alice: ");
	console.log(alice_account_info.assets);
})().catch((e) => {
	console.log(e);
});
