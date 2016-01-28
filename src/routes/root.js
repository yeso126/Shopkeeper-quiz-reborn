import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Root extends React.Component {
    render() {
        return (
          <div>
            <h1 className="title">Dota 2 ShopKeeper Quiz Reloaded (kappa)</h1>
            <nav className="nav" >
              <img className="logo" src="img/dotologo.png"></img>
              <ul className="nav_list">
                <Link className="nav_list_link" to="/">Home</Link>
                <Link className="nav_list_link" to="shopkeeperquiz">ShopkeeperQuiz</Link>
                <Link className="nav_list_link" to="leaderboard">Leaderboard</Link>
              </ul>
            </nav>
            {this.props.children}
          </div>
        );
    }
};
