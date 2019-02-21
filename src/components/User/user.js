import React, { Component } from 'react';

import './user.css';

export default class User extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
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
