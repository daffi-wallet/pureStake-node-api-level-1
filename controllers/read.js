var AWS = require("aws-sdk"); // aws sdk to handle dynamoDB
const awsConfig = require("../database/config.js"); // import db configuration for AWS connection

AWS.config.update(awsConfig.awsRemoteConfig); // update AWS configuration remotely
let docClient = new AWS.DynamoDB.DocumentClient(); // setup new dynamo client // setup new dynamo client

let fetchOneByKey = function () {
	var params = {
		// initialize parameter for database table authentication (table name)
		TableName: awsConfig.awsTableName,
		Key: {
			asset_id: "2",
		},
	};
	docClient.get(params, function (err, data) {
		if (err) {
			console.log(
				"users::fetchOneByKey::error - " + JSON.stringify(err, null, 2)
			);
		} else {
			console.log(
				"users::fetchOneByKey::success - " + JSON.stringify(data, null, 2)
			);
		}
	});
};

fetchOneByKey();
