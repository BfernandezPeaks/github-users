import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import User from './User.component';

const GET_USER = gql`
query User($search: String!) {
  user(login: $search) {
    login,
    id,
    url,
    name,
    company,
    location,
    email,
    bio
  }
}
`;

export default class UserList extends Component {

  state = {
    loading: false,
    user: [],
    error: null
  };

  render() {
    return <Query query={GET_USER} variables={this.props}>
      {({ loading, error, data }) => {
        if (loading) return <span>Loading</span>;
        if (error) return <span>Error</span>;
        return <User user={data.user} />;
      }}
    </Query>;
  }
}
