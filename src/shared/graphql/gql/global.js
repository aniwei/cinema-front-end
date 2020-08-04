import { gql } from '@apollo/client';

export const search = gql`
  query search($q: String!) {
    search (q: $q) {
      accounts {
        account_id
        name
      }
      users {
        name
        user_id
      }
    }
  }
`;

export const searchHistory = gql`
  query searchHistory {
    searchHistory
  }
`;
