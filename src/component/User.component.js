import React, { Component } from 'react';

const userProperties = ['login', 'id', 'url', 'company', 'location', 'email', 'bio'];

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
  }

  handleClick() {
    this.setState({ detail: !this.state.detail });
  }

  render() {
    const detail = this.state.detail
      ? <div className="detail">
        {userProperties.map((p, key) => <div key={key}><label>{p}:</label> <span>{this.props.user[p]}</span></div>)}
      </div>
      : null;
    return (
      <div className="user">
        <div className="name" onClick={this.handleClick.bind(this)}>{this.props.user.name}</div>
        {detail}
      </div>
    );
  }
}