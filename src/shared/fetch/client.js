import fetch from 'isomorphic-fetch';
import serverConfig from 'configs/server';

export default function (path, options = {}) {
  return fetch (`${serverConfig.uri}${path}`, {
    ...options,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  }).then(res => res.json()).then(res => {
    const { code, data, message } = res;

    if (code === 0) {
      return Promise.resolve(data);
    }

    return Promise.reject(message)
  })
};