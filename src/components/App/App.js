import React, { Component } from 'react';

import './App.css';
import ReposeList from '../ReposList/repos-list.container';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadRepos = this.loadRepos.bind(this);
  }

  loadRepos() {
    const { getRepos } = this.props;
    const username = this.nameInputRef.value;
    if (username) {
      getRepos(username);
    }
    this.nameInputRef.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1 className="italics">Repos Explorer</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter a GitHub username"
          ref={nameInputRef => (this.nameInputRef = nameInputRef)}
        />
        <button type="button" id="search" onClick={this.loadRepos}>
          Search
        </button>
        <ReposeList />
      </div>
    );
  }
}

export default App;
