import React, { Component } from 'react';
// import { USERDATA } from '../data/user.data';
import User from './User.component';

import Client from '../service/client.service';
import gql from 'graphql-tag';

const client = new Client();

export default class UserList extends Component {
  render() {

    if (this.props.search) {

      client.query({
        query: gql`
          query {
            user(login: \"${this.props.search}\") {
              repositories(first: 50, isFork: false) {
                nodes {
                  name url
                }
              }
            }
          }`
          //   query ViewerQuery {
          //     viewer {
          //       login
          //    }
          //   }
          // `
      })
        .then(resp => console.log(resp.data))
        .catch(error => console.error(error));
    }


    return <div>Hello</div>;

    // const users = this.props.search ?
    //   USERDATA
    //     .filter(user => user.name.toLowerCase().search(this.props.search.toLowerCase()) > -1)
    //     .map((user, index) => <li key={index}><User user={user} /></li>)
    //   : [];
    // return <ul>{users}</ul>;
  }
}