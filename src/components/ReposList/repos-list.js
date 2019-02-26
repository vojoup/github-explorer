import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';
import PropTypes from 'prop-types';

import './repos-list.css';

export default class ReposeList extends Component {
  constructor(props) {
    super(props);
    this.renderReposList = this.renderReposList.bind(this);
  }

  renderReposList() {
    const { repos } = this.props;
    return (
      <Transition
        items={repos}
        keys={repo => repo.id}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        unique
        trail={100}
      >
        {repo => ({ opacity, transform }) => (
          <li style={{ opacity, transform }} key={repo.id} className="repo">
            <h3>
              {repo.name} -{' '}
              <span className="date">{repo.created_at.substring(0, 10)}</span>
            </h3>
            <p>{repo.description}</p>
            <a href={repo.html_url}>See repo</a>
          </li>
        )}
      </Transition>
    );
  }

  render() {
    return <ul id="repos-list">{this.renderReposList()}</ul>;
  }
}

ReposeList.propTypes = {
  repos: PropTypes.object.isRequired,
};
