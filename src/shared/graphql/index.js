import GQL from './gql';
import client from './client';

export default function request(query, options = {}) {
  const { method = 'query', params, ...rest } = options;

  return client[`__${method}`]({ [method]: GQL[query], variables: params, ...rest })
    .then(response => response[query]);
}
