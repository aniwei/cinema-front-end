import request from 'shared/graphql';

export function oauth(params) {
  return request('oauth', {
    method: 'mutation',
    params,
  });
}

export function viewer() {
  return request('viewer');
}

export function accounts() {
  return request('accounts');
}

export function createAccount(params) {
  return request('createAccount', {
    method: 'mutation',
    params
  });
}

export function updateAccount(params) {
  return request('updateAccount', {
    method: 'mutation',
    params
  });
}
