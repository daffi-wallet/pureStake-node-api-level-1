require("dotenv").config();

const util = require("util");

const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const apiKey = process.env.PURESTAKE_API_KEY;
const senderMnemonic = process.env.BASE_ACC_MNEMONIC;
const receiverAccount = process.env.RECEIVER_ACCOUNT;

const token = {
	"X-API-key": apiKey,
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
	console.log(
		util.inspect(sendTx, { showHidden: false, depth: null, colors: true })
	);
})().catch((e) => {
	console.log(e);
});
