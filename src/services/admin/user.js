import graphql from 'shared/graphql';

export function logIn (params) {
  return graphql(`logIn`, {
    params
  });
}

export function viewer () {
  return graphql(`viewer`);
}