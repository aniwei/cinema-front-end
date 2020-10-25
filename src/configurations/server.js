export default {
  uri: process.env.NODE_ENV !== 'development' ? 
    'http://localhost:4000' : '//api.cinema.muwu.tech',
  endpoint: process.env.NODE_ENV === 'development' ? 
    'http://localhost:4000/graphql' : '//api.cinema.muwu.tech/graphql',
  timeout: 60000,
  // uri: 'http://dev.weim.com/graphql?debugger=1'
};
