/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_OKRSTUDIOV2_STRIPE_SECRET_KEY
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const Stripe = require("stripe")

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

const stripe = Stripe(STRIPE_SECRET_KEY)

const handler = async (event) => {
  const { stripeCustomerId, returnUrl } = event.arguments.input
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: returnUrl 
    })

    return session.url
  } catch(e) {
    console.log(e)
    return "Internal server error"
  }
};

module.exports = { handler }


if (require.main === module) {
  const event = require("./event.json")

  const testHandler = async event => {
    const res = await handler(event)
    console.log(res)
  }

  testHandler(event)
}
