import { gql } from '@apollo/client';

export const movies = gql`
  query sellingMovies {
    sellingMovies {
      code
      message
      data
    }
  }
`;
