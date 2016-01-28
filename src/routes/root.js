import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Root extends React.Component {
    render() {
        return (
          <div>
            <nav className="root">
              <h1>Dota ShopKeeper Quiz Reloaded</h1>
              <ul>

                <Link className="root__link" to="/">Home</Link>
                <Link className="root__link" to="shopkeeperquiz">ShopkeeperQuiz</Link>
                <Link className="root__link" to="leaderboard">Leaderboard</Link>
              </ul>
            </nav>
            {this.props.children}
          </div>
        );
    }
};
