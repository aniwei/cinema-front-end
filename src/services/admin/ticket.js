import graphql from 'shared/graphql';

export function sellingMovies (params) {
  return graphql(`sellingMovies`);
}

export function trading (params) {
  return graphql(`trading`, {
    params
  })
}
