import { gql } from '@apollo/client';

export const logIn = gql`
  mutation logIn (
    $input: LogInInput!
  ) {
    logIn (
      input: $input
    ) {
      viewer {
        sessionToken
        user {
          id
          objectId
        }
      }
    }
  }
`;


export const viewer = gql`
  query viewer {
    viewer {
      user {
        id
        objectId
      }
    }
  }

`
