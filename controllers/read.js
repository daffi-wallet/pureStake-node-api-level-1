var AWS = require("aws-sdk");

const awsConfig = require("../database/config.js");

AWS.config.update(awsConfig.aws_remote_config);

let docClient = new AWS.dynamoDB.DocumentClient();

let fetchOneByKey = function () {
	var params = {
		TableName: "daffi_wallet_algo_assets",
		Key: {
			asset_name: "email1",
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
