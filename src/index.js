import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Game from './routes/game.js';
import NoMatch from './routes/nomatch.js';
import appState from './state/observables';

// Implementar react-router

// render(<TimerView appState={appState} />, document.getElementById('root'));

render((
  <Router history={browserHistory}>
    <Route path="/" component={Game}>

    </Route>
   <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
