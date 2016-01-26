import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="shopkeeperquiz">ShopkeeperQuiz</Link>
              <Link to="leaderboard">Leaderboard</Link>
            </nav>
            {this.props.children}
          </div>
        );
    }
};
