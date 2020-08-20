import { gql } from '@apollo/client';

export const movies = gql`
  query movies (
    $where: MovieWhereInput
    $order: [MovieOrder!]
    $skip: Int
    $after: String
    $first: Int
    $before: String
    $last: Int
    $options: ReadOptionsInput
  ) {
    movies (
      where: $where
      order: $order
      skip: $skip
      after: $after
      first: $first
      before: $before
      last: $last
      options: $options
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          poster
          shows {
            date
            time
            tickets
            timestamp
          }
        }
        cursor
      }
      count 
    }
  }
`;

export const movieShows = gql`
  query movies (
    $where: MovieWhereInput
    $order: [MovieOrder!]
    $skip: Int
    $after: String
    $first: Int
    $before: String
    $last: Int
    $options: ReadOptionsInput
  ) {
    movieShows (
      where: $where
      order: $order
      skip: $skip
      after: $after
      first: $first
      before: $before
      last: $last
      options: $options
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          poster
          shows {
            date
            time
            tickets
            timestamp
          }
        }
        cursor
      }
      count 
    }
  }
`;

