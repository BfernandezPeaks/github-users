import React, { Component } from 'react';
import './User.style.css';
export default class User extends Component {

  state = { detail: false };

  handleClick() {
    this.setState({ detail: !this.state.detail });
  }

  getDetail(user) {
    return this.state.detail
      ?
      <div className="detail">
        <div>
          <label>name:</label>
          <span>{user.name}</span>
        </div>
        <div>
          <label>email:</label>
          <span><a href={user.email}>{user.email}</a></span>
        </div>
        <div>
          <label>bio:</label>
          <span>{user.bio}</span>
        </div>
        <div>
          <label>url:</label>
          <span><a href={user.url}>{user.url}</a></span>
        </div>
      </div>
      : null;
  }

  render() {
    const user = this.props.data.node;
    return (
      <div className="user">
        <img className="avatar" src={user.avatarUrl} alt="avatar" />
        <div className="login" onClick={this.handleClick.bind(this)}>{user.login}</div>
        {this.getDetail(user)}
      </div>
    );
  }
}