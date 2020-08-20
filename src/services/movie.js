import fetch from 'shared/fetch';

export function movies () {
  return fetch(`/movie`);
}

export function shows ({ movie }) {
  return fetch(`/movie/${movie.objectId}/show`)
}