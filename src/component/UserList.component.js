import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import User from './User.component';


const SEARCH_USER = gql`
query Search($queryString: String!) {
  search(query: $queryString, type: USER, first: 10) {
    userCount,
    edges {
      node {
        ... on User {
          login,
          name,
          email,
          avatarUrl,
          bio,
          url
        }
      }
    }
  }
}
`;


export default class UserList extends Component {

  render() {
    return <Query query={SEARCH_USER} variables={{ queryString: this.props.search }}>
      {({ loading, error, data }) => {
        if (loading) return <span>Loading</span>;
        if (error) return <span>Error</span>;
        const users = data.search.edges.map((user, index) => <User data={user} key={index} />);
        return (
          <div className="result">
            <div>Count: {data.search.userCount}</div>
            {users}
          </div>
        );
      }}
    </Query>;
  }
}
