import React, { Component } from 'react';
import { History } from 'react-router';
import {Jumbotron, Button} from 'react-bootstrap';

var Home = React.createClass( {
   mixins: [ History ],
   pushState(){
    this.history.pushState(null, '/shopkeeperquiz');
   },
    render() {
        return (
            <main>
                <Jumbotron className="container-fluid">
                  <h1>Dota 2 ShopKeeper Quiz Reloaded</h1>
                  <h3>4head</h3>
                  <Button bsStyle="primary"
                          onClick={this.pushState}>
                          Play now
                  </Button>
                </Jumbotron>
                <section className="container">
                  <Jumbotron>
                    <h2>With a few add-ons</h2>
                    <p>Score system based on response time, practice your timing when buying an item in the shop</p>
                  </Jumbotron>
                  <Jumbotron>
                    <h2>Leaderboards</h2>
                    <p>Get a ranked score in the leaderboards, the faster you complete the test the better score you get</p>
                  </Jumbotron>
                </section>
            </main>
        );
    }
});

export default Home;
