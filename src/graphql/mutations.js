/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
    }
  }
`;
