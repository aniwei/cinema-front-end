import { gql } from '@apollo/client';

export const sellingMovies = gql`
  query sellingMovies {
    sellingMovies {
      code
      message
      data
    }
  }
`;

export const trading = gql`
  mutation trading ($fields: TicketTradingFields!, $showId: ID!) {
    trading (fields: $fields, showId: $showId) {
      code
    }
  }
`;