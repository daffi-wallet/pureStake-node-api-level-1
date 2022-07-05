require("dotenv").config(); //get secret keys from env files
const fetch = require("node-fetch"); // use fetch library for http requests

var AWS = require("aws-sdk"); // import aws-sdk to connect with dynamoDB
const awsConfig = require("../database/config.js"); // import db configuration for AWS connection

const apiKey = process.env.PURESTAKE_API_KEY; // API key given in purestake account
const baseAccKey = process.env.BASE_ACC_KEY; // API key of sender account

const baseServer =
	"https://testnet-algorand.api.purestake.io/idx2/v2/accounts/" + baseAccKey;

AWS.config.update(awsConfig.awsRemoteConfig); // update AWS configuration remotely
let docClient = new AWS.dynamoDB.DocumentClient(); // setup new dynamo client

(async () => {
	const response = await fetch(baseServer, {
		headers: {
			accept: "application/json",
			"x-api-key": apiKey,
		},
	});

	var data = await response.json();

	// update parameters Item with new fetched data from API
	var params = {
		TableName: awsConfig.awsTableName,
		Item: { asset_id: 2, asset_name: "email1", ...data },
	};

	// store all data in dynamoDB
	docClient.put(params, function (err, data) {
		if (err) {
			console.log(
				awsConfig.awsTableName +
					"::save::error - " +
					JSON.stringify(err, null, 2)
			);
		} else {
			console.log(awsConfig.awsTableName + "::save::success");
		}
	});

	console.log(params);
})().catch((e) => {
	console.log(e);
});
