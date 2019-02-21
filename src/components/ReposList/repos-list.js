import React, { Component } from 'react';

import './repos-list.css';

export default class ReposeList extends Component {
  constructor(props) {
    super(props);
    this.renderReposList = this.renderReposList.bind(this);
  }

  renderReposList() {
    const { repos } = this.props;
    return repos.map(
      ({ id, name, description, created_at: createdAt, html_url: htmlUrl }) => (
        <li key={id} className="repo">
          <h3>
            {name} - <span className="date">{createdAt.substring(0, 10)}</span>
          </h3>
          <p>{description}</p>
          <a href={htmlUrl}>See repo</a>
        </li>
      )
    );
  }

  render() {
    return <ul id="repos-list">{this.renderReposList()}</ul>;
  }
}
