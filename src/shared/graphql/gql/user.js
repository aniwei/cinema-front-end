import { gql } from '@apollo/client';

export const oauth = gql`
  mutation oauth($type: OAuthType!, $code: String!) {
    oauth (type: $type, code: $code) {
      sessionToken
      id
    }
  }
`;

export const viewer = gql`
  query viewer {
    viewer {
      sessionToken
      user {
        username
        uid
        id
      }
    }
  }
`;

export const accounts = gql`
  query accounts {
    accounts {
      name
      header_url
      description
      uid
      account_id
      firstname
      lastname
      broker
      email
      status
    }
  }
`;

export const createAccount = gql`
  mutation createAccount($fields: AccountFields) {
    createAccount(fields: $fields) {
      code
      message
    }
  }
`;

export const updateAccount = gql`
  mutation updateAccount($accountId: String!, $fields: UpdateAccountFields!) {
    updateAccount(accountId: $accountId, fields: $fields) {
      code
      message
    }
  }
`;
