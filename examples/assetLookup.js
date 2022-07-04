require("dotenv").config();

const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/idx2";
const port = "";

const apiKey = process.env.PURESTAKE_API_KEY;

const token = {
	"X-API-key": apiKey,
};

let indexerClient = new algosdk.Indexer(token, baseServer, port);

(async () => {
	let blockInfo = await indexerClient.lookupBlock(5).do();
	console.log(blockInfo);
})().catch((e) => {
	console.log(e);
});
