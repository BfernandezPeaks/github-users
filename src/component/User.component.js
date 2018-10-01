import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
  }

  handleClick() {
    this.setState({ detail: !this.state.detail });
  }

  render() {
    const details = this.state.detail ?
      <div className="details">
        <p>{this.props.user.email}</p>
      </div>
      : null;
    return (
      <div className="user">
        <p onClick={this.handleClick.bind(this)}>{this.props.user.name}</p>
        {details}
      </div>
    );
  }
}