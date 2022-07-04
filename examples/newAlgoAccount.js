const algosdk = require("algosdk");

(async () => {
	const myaccount = algosdk.generateAccount();
	console.log("Account Address = " + myaccount.addr);
	let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
	console.log("Account Mnemonic = " + account_mnemonic);
	console.log("Account created. Save off Mnemonic and address");
	console.log("Add funds to account using the TestNet Dispenser: ");
	console.log("https://dispenser.testnet.aws.algodev.network/ ");
	return myaccount;
})().catch((e) => {
	console.log(e);
});
