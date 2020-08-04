import pTimeout from 'p-timeout';
import serverConfig from 'configs/server';

const factory = (client, method) =>
  options => {
    const request = client[method]({
      ...options,
      fetchPolicy: 'no-cache',
    });

    return pTimeout(request, serverConfig.timeout)
      .then(response => response.data)
      .catch(error => {
        console.log(error);

        throw error;
      });
  };

const __query = client => {
  client.__query = factory(client, 'query');

  return client;
};

const __mutation = client => {
  client.__mutation = factory(client, 'mutate');

  return client;
};

const factors = [__query, __mutation];

export default client => factors.reduce((c, factor) => factor(c), client);
