import fetch from 'shared/fetch';
import qs from 'querystring'

export function movies (params) {
  return fetch(`/movie?${qs.stringify(params)}`);
}

export function code ({ email }) {
  return fetch(`/common/code?email=${email}`);
}

export function shows ({ movie }) {
  return fetch(`/movie/${movie.objectId}/show`)
}

export function tickets ({ showId }) {
  return fetch(`/show/${showId}/tickets`);
}

export function trading (body) {
  return fetch(`/trading`, {
    method: 'post',
    body: JSON.stringify(body)
  });
}