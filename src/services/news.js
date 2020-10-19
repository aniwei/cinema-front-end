import fetch from 'shared/fetch';
import qs from 'querystring'

export function news (params) {
  const { newsId, ...rest } = params;

  const path = newsId ? `/message/${newsId}` : `/message`;

  return fetch(`${path}?${qs.stringify(rest)}`);
}
