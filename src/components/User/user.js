import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

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
              <Spring
                from={{
                  opacity: 0,
                  transform: 'scale(0) translate3d(0,-40px,0)',
                }}
                to={{ opacity: 1, transform: 'scale(1) translate3d(0,0px,0)' }}
              >
                {props => (
                  <img style={props} src={user.avatar_url} alt={user.name} />
                )}
              </Spring>
            </span>
          </>
        )}
      </div>
    );
  }
}
