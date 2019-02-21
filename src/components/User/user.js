import React, { Component } from 'react';

import './user.css';

export default class User extends Component {
  render() {
    const { user, message } = this.props;
    return (
      <div>
        {message && <h2>{message}</h2>}
        {user && (
          <>
            <h2>Showing {user.name}'s repos</h2>
            <span>
              <img src={user.avatar_url} alt={user.name} />
            </span>
          </>
        )}
      </div>
    );
  }
}
