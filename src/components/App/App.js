import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import PropTypes from 'prop-types';

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
        <Spring
          from={{
            height: 0.5,
            transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)',
          }}
          to={{
            height: 'auto',
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
          }}
        >
          {props => <h1 style={props}>Repos Explorer</h1>}
        </Spring>
        <form onSubmit={this.loadRepos}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 1000 }}
          >
            {props => (
              <input
                style={props}
                type="text"
                name="username"
                placeholder="Enter a GitHub username"
                ref={nameInputRef => (this.nameInputRef = nameInputRef)}
              />
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 300, duration: 1000 }}
          >
            {props => (
              <button
                style={props}
                type="submit"
                id="search"
                onClick={this.loadRepos}
              >
                Search
              </button>
            )}
          </Spring>
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

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};
