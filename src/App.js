import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Users</h1>
        </header>
        <p></p>
        <Search search={this.handleSearch.bind(this)} />
        <UserList search={this.state.search} />
      </div>
    );
  }
}

export default App;
