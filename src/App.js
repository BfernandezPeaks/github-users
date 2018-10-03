import React, { Component } from 'react';
import 'bootstrap-css';
import Search from './component/Search.component';
import UserList from './component/UserList.component';

class App extends Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  handleSearch(search) {
    this.setState({ search: search });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Github users</h1>
          <p className="lead">This is a simple app to search for github user</p>
        </div>
        <Search search={this.handleSearch.bind(this)} />
        <UserList search={this.state.search} />
      </div>
    );
  }
}

export default App;
