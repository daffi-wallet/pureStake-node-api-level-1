var AWS = require("aws-sdk");

const awsConfig = require("../database/config.js");

AWS.config.update(awsConfig.aws_remote_config);

let docClient = new AWS.dynamoDB.DocumentClient();

let remove = function () {
	var params = {
		TableName: "daffi_wallet_algo_assets",
		Key: {
			asset_id: 1,
		},
	};
	docClient.delete(params, function (err, data) {
		if (err) {
			console.log("users::delete::error - " + JSON.stringify(err, null, 2));
		} else {
			console.log("users::delete::success");
		}
	});
};

remove();
