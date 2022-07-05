//	import dotenv library to get data from .env file
require("dotenv").config();

//	import secret keys for AWS server authentication
const awsAccessKeyId = process.env.AWS_ACCESS_KEY;
const awsSecretAccessKey = process.env.AWS_SECRET_KEY;
const awsEndPoint = process.env.AWS_END_POINT;
const awsRegion = process.env.AWS_DEFAULT_REGION;
const awsTableName = process.env.TABLE_NAME;

//	exporting server login credentials to be used in controllers
module.exports = {
	awsTableName: awsTableName,
	awsLocalConfig: {
		//Provide details for local configuration
	},
	awsRemoteConfig: {
		accessKeyId: awsAccessKeyId,
		secretAccessKey: awsSecretAccessKey,
		endpoint: awsEndPoint,
		region: awsRegion,
	},
};
