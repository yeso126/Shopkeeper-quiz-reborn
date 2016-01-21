import React from 'react';
import { render } from 'react-dom';
import { TimerView } from './app';
import appState from './observables'

render(<TimerView appState={appState} />, document.getElementById('root'));
