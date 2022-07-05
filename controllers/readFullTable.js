var AWS = require("aws-sdk");

const awsConfig = require("../database/config.js");

AWS.config.update(awsConfig.awsRemoteConfig);

let docClient = new AWS.dynamoDB.DocumentClient();

let fetchOneByKey = async function () {
	var params = {
		TableName: awsConfig.awsTableName,
	};

	docClient.scan(params, function (err, data) {
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
