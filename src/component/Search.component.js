import React, { Component } from 'react';

export default class Search extends Component {
  handleChange(event) {
    this.props.search(event.target.value);
  }

  render() {
    return <input type="text" placeholder="Search for an user" onChange={this.handleChange.bind(this)} />
  }
}