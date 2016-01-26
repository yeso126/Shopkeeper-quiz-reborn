import React, { Component } from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <main>
                <header>
                  <h1>Welcome user!</h1>
                </header>
                <section>
                  <article>
                    <h1>ShopKeeperK Quiz with a few Add-ons</h1>
                    <p>Score system based on response time, practice your timing when buying an item in the shop</p>
                  </article>
                  <article>
                    <h1>Leaderboards</h1>
                    <p>Get a ranked score in the leaderboards, the faster you complete the test the better score you get</p>
                  </article>
                </section>
            </main>
        );
    }
};
