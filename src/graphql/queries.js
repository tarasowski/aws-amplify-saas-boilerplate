/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSettings = /* GraphQL */ `
  query GetSettings($organizationId: ID!) {
    getSettings(organizationId: $organizationId) {
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $organizationId: ID
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSettings(
      organizationId: $organizationId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
