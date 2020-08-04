const url = new URL(window.location.href);
const SEPARATOR_AND = '&';
const SEPARATOR_EQUAL = '=';

export function getUrlProperty(propertyName) {
  if (propertyName in url) {
    return url[propertyName];
  }

  throw new Error(
    `The property "${propertyName}" does not exist`
  );
}

export function getQueries() {
  const queries = {};
  const search = getUrlProperty('search').slice(1);

  if (search) {
    search
    .split(SEPARATOR_AND)
    .forEach(field => {
      const [key, value] = field.split(SEPARATOR_EQUAL);

      queries[key] = value;
    });
  }

  return queries;
}

export function getHash() {
  return getUrlProperty('hash').slice(1);
}
