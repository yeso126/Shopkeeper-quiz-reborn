import React, { Component } from 'react';
import { TimerView } from '../components/timer.js';
import appState from '../state/observables';


export default class Root extends React.Component {
    render() {
        return (
          <div>
            <TimerView appState={appState}/>
          </div>
        );
    }
};
