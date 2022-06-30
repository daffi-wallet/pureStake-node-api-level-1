// Algorand Algod (v2) example
// Send transaction on TestNet

require("dotenv").config();

const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const ApiKey = process.env.PURESTAKE_API_KEY;
const senderMnemonic = process.env.SENDER_MNEMONIC;
const receiverAccount = process.env.RECEIVER_ACCOUNT;

const token = {
	"X-API-key": ApiKey,
};

let algodClient = new algosdk.Algodv2(token, baseServer, port);

(async () => {
	let params = await algodClient.getTransactionParams().do();

	let amount = 100000;
	var mnemonic = senderMnemonic;

	var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

	let txn = {
		from: recoveredAccount.addr,
		to: receiverAccount,
		fee: 1,
		amount: amount,
		firstRound: params.firstRound,
		lastRound: params.lastRound,
		genesisID: params.genesisID,
		genesisHash: params.genesisHash,
		note: new Uint8Array(0),
	};

	let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
	let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();

	console.log("Transaction : " + sendTx.txId);
})().catch((e) => {
	console.log(e);
});