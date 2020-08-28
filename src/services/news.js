import fetch from 'shared/fetch';
import qs from 'querystring'

export function news (params) {
  const { newsId, ...rest } = params;

  const path = newsId ? `/news/${newsId}` : `/news`;

  return fetch(`${path}?${qs.stringify(rest)}`);
}
