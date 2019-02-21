import React, { Component } from 'react';

import './App.css';
import ReposeList from '../ReposList/repos-list.container';
import User from '../User/user.container';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadRepos = this.loadRepos.bind(this);
  }

  loadRepos(e) {
    e.preventDefault();
    const { getRepos } = this.props;
    const username = this.nameInputRef.value;
    if (username) {
      document.title = `${username} repos`;
      getRepos(username);
    }
    this.nameInputRef.value = '';
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <h1 className="italics">Repos Explorer</h1>
        <form onSubmit={this.loadRepos}>
          <input
            type="text"
            name="username"
            placeholder="Enter a GitHub username"
            ref={nameInputRef => (this.nameInputRef = nameInputRef)}
          />
          <button type="submit" id="search" onClick={this.loadRepos}>
            Search
          </button>
        </form>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <User />
            <ReposeList />
          </>
        )}
      </div>
    );
  }
}

export default App;
