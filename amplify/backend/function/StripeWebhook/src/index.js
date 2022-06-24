/* Amplify Params - DO NOT EDIT
	API_AWSAMPLIFYSAASBOILER_GRAPHQLAPIIDOUTPUT
	API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_ARN
	API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

const API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME =
  process.env.API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME;

const responseSuccess = {
  statusCode: 200,
  body: JSON.stringify("Successfully verified"),
};

const responseError = {
  statusCode: 400,
  body: JSON.stringify("Internal Server Error"),
};

const createParams = (
  client_reference_id,
  customer,
  subscription,
  amountTotal,
  metadata
) => ({
  TableName: API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME,
  Key: {
    organizationId: client_reference_id,
  },
  UpdateExpression:
    "SET stripeCustomerId = :sid, stripeSubscriptionId = :ssid, subscriptionStatus = :pst,  amountTotal = :tA, priceId = :pid",
  ExpressionAttributeValues: {
    ":sid": customer,
    ":ssid": subscription,
    ":pst": "ACTIVE",
    ":tA": amountTotal,
    ":pid": metadata.priceId
  },
});

const updateDB = (params) => dynamodb.update(params).promise();

const destructure = (data) => {
  const {
    type,
    data: {
      object: { metadata, client_reference_id, customer, subscription, amount_total },
    },
  } = data;
  return {
    client_reference_id,
    customer,
    subscription,
    amount_total,
    metadata
  };
};

const handleCompleted = async (data) => {
  const { client_reference_id, customer, subscription, amount_total, metadata } =
    destructure(data);
  await updateDB(
    createParams(client_reference_id, customer, subscription, amount_total, metadata)
  );
};

const updateParams = (organizationId, amountTotal, priceId) => ({
  TableName: API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME,
  Key: {
    organizationId
  },
  UpdateExpression: "SET subscriptionStatus = :pst, amountTotal = :ta, priceId = :pid, updatedAt = :ua",
  ExpressionAttributeValues: {
    ":pst": "ACTIVE",
    ":ta": amountTotal,
    ":pid": priceId,
    ":ua": new Date().toISOString()
  }
})

const cancelParams = (organizationId) => ({
  TableName: API_AWSAMPLIFYSAASBOILER_SETTINGSTABLE_NAME,
  Key: {
    organizationId
  },
  UpdateExpression: "SET subscriptionStatus = :pst, updatedAt = :ua, amountTotal = :ta, priceId = :pid",
  ExpressionAttributeValues: {
    ":pst": "CANCELED",
    ":ta": null,
    ":ua": new Date().toISOString(),
    ":pid": null
  }
})

const handleSubscription = async (data) => {
  const newSubscription = data.data.object
  const cancelAt = newSubscription.cancel_at
  const organizationId = newSubscription.metadata.organizationId
  const newPlan = newSubscription.plan 
  const oldPlan = data.data.previous_attributes.plan
  if (cancelAt) {
    return await updateDB(cancelParams(organizationId))
  } else {
    return await updateDB(updateParams(organizationId, newPlan.amount, newPlan.id))
  }
}

const handler = async (event) => {
  try {
    const { body } = event;
    const parsed = JSON.parse(body);
    if (parsed.type === "checkout.session.completed") {
      await handleCompleted(parsed);
    }
    if (parsed.type === "customer.subscription.updated") {
      await handleSubscription(parsed)
    }
    return responseSuccess;
  } catch (e) {
    console.log(e);
    return responseError;
  }
};

module.exports = { handler };

if (require.main === module) {
  const subscriptionCreated = require("./subscription-created.json");
  const subscriptionUpdated = require("./subscription-updated.json");
  const canceled = require("./subscription-canceled.json")
  const test = require("./test.json")

  const testHandler = async (event) => {
    console.log(await handler(event));
  };

  testHandler(test);
}
