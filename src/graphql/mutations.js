/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const stripeCreateSubscription = /* GraphQL */ `
  mutation StripeCreateSubscription($input: StripeCreateSubscriptionInput!) {
    stripeCreateSubscription(input: $input)
  }
`;
export const stripeManageSubscription = /* GraphQL */ `
  mutation StripeManageSubscription($input: StripeManageSubscriptionInput!) {
    stripeManageSubscription(input: $input)
  }
`;
export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
      organizationId
      firstName
      lastName
      email
      stripeCustomerId
      stripeSubscriptionId
      paymentStatus
      subscriptionStatus
      amountTotal
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
      organizationId
      firstName
      lastName
      email
      stripeCustomerId
      stripeSubscriptionId
      paymentStatus
      subscriptionStatus
      amountTotal
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
      organizationId
      firstName
      lastName
      email
      stripeCustomerId
      stripeSubscriptionId
      paymentStatus
      subscriptionStatus
      amountTotal
      priceId
      createdAt
      updatedAt
    }
  }
`;
