import fetch from 'shared/fetch';
import qs from 'querystring'

export function configs (params) {
  return fetch(`/config?${qs.stringify(params)}`);
}
