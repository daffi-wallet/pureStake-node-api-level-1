require("dotenv").config(); //get secret keys from env files

const util = require("util"); // use to console log [object object]

const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const apiKey = process.env.PURESTAKE_API_KEY; // API key given in purestake account
const senderMnemonic = process.env.BASE_ACC_MNEMONIC; // mnemonic of the sender account to make sure account is active
const receiverAccount = process.env.RECEIVER_ACCOUNT; // algo receiving account number

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

	// Wait for confirmation
	let confirmedTxn = await versionsCheck(
		algodClient,
		sendTx.txId,
		txn.lastRound
	);

	console.log(
		util.inspect(confirmedTxn, { showHidden: false, depth: null, colors: true })
	);
})().catch((e) => {
	console.log(e);
});
