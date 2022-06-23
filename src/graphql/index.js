import { API, graphqlOperation } from "aws-amplify";

export const callAPI = async (operation, payload) =>
  await API.graphql(graphqlOperation(operation, payload));

export const stripeCreateSubscription = /* GraphQL */ `
  mutation StripeCreateSubscription($input: StripeCreateSubscriptionInput!) {
    stripeCreateSubscription(input: $input)
  }
`;
