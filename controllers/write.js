var AWS = require("aws-sdk"); // aws sdk to handle dynamoDB
const awsConfig = require("../database/config.js"); // import db configuration for AWS connection

AWS.config.update(awsConfig.awsRemoteConfig); // update AWS configuration remotely
let docClient = new AWS.DynamoDB.DocumentClient(); // setup new dynamo client // setup new dynamo client

let save = function () {
	// create sample data to insert into database
	var input = {
		asset_id: 2,
		asset_name: "email2",
		email_id: "example-2@gmail.com",
		created_by: "clientUser",
		created_on: new Date().toString(),
		updated_by: "clientUser",
		updated_on: new Date().toString(),
		is_deleted: false,
	};

	var params = {
		// initialize parameter for database table authentication (table name)
		TableName: awsConfig.awsTableName,
		Item: input,
	};

	docClient.put(params, function (err, data) {
		if (err) {
			console.log(
				"daffi_wallet_algo_assets::save::error - " +
					JSON.stringify(err, null, 2)
			);
		} else {
			console.log("daffi_wallet_algo_assets::save::success" + params);
		}
	});
};

save();
