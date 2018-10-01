
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default class Client {
  constructor() {
    const token = process.env.REACT_APP_TOKEN;
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
        }
      }
    });

    return new ApolloClient({
      link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
      cache: new InMemoryCache()
    });

  }
}