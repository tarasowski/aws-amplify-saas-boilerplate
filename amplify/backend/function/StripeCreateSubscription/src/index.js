/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const Stripe = require("stripe");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = Stripe(STRIPE_SECRET_KEY);

const session = async (organizationId, priceId, successUrl, cancelUrl, packageName) =>
  await stripe.checkout.sessions.create({
    mode: "subscription",
    automatic_tax: {
      enabled: true,
    },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    client_reference_id: organizationId,
    metadata: {
      priceId
    },
    subscription_data: {
      metadata: {
        organizationId
      }
    },
    success_url: successUrl + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: cancelUrl,
  });

const handler = async (event) => {
  try {
    const { organizationId, priceId, successUrl, cancelUrl } =
      event.arguments.input;
    const res = await session(organizationId, priceId, successUrl, cancelUrl);
    return res.url;
  } catch (e) {
    console.log(e);
    return "/#/settings";
  }
};

module.exports = { handler };

if (require.main === module) {
  const event = require("./event.json");

  const testHandler = async (event) => {
    const res = await handler(event);
    console.log(res);
  };

  testHandler(event);
}
