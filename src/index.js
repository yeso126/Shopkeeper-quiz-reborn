import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history';

import appState from './state/observables';

// Routes Imports
import Root from './routes/root';
import Leaderboard from './routes/leaderboard';
import NoMatch from './routes/nomatch';
import Game from './routes/game';
import Home from './routes/home';


render((
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="/shopkeeperquiz" component={Game}/>
      <Route path="/leaderboard" component={Leaderboard}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
