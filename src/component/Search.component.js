import React, { Component } from 'react';

export default class Search extends Component {

  state = { value: '' };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.props.search(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" className="form-control" placeholder="Search for an user" onChange={this.handleChange.bind(this)} />
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Search</button>
      </form>
    );
  }
}