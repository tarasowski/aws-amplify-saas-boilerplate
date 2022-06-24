/* Amplify Params - DO NOT EDIT
	API_AWSAMPLIFYSAASBOILER_GRAPHQLAPIIDOUTPUT
	API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_ARN
	API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */

const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient({region: process.env.REGION})

const API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME = process.env.API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME


const createParams = (sub, email) => ({
  TableName: API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME,
  Item: {
    organizationId: sub,
    email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
})

const save = params => dynamodb.put(params).promise()

const handler = async (event) => {
  try {
    const { request: {userAttributes: {sub, email}} } = event;
    const res = await save(createParams(sub, email))
    return event;
  } catch (e) {
    console.log(e)
    return event;
  }
};

module.exports = { handler };

if (require.main === module) {
  const event = require("./event.json");

  const testHandler = async (event) => {
    console.log(await handler(event));
  };

  testHandler(event);
}
