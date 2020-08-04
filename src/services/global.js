import request from 'shared/graphql';

export function search(params) {
  return request('search', {
    params,
  });
}

export function searchHistory() {
  return request('searchHistory');
}
