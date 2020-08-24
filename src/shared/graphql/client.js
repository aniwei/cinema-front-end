import { from, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import serverConfig from 'configs/server';
import appConfig from 'configs/app';
import ErrorLink from './errorHandling';
import enhancer from './enhancer';

const httpLink = new HttpLink({
  uri: serverConfig.endpoint
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      'x-parse-session-token': token || ''
    }
  };
});

const client = new ApolloClient({
  link: from([
    ErrorLink,
    authLink.concat(httpLink),
  ]),
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'cors',
  }
});

export default enhancer(client);
