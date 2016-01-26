import React, { Component } from 'react';
import { TimerView } from '../components/timer.js';
import {observer} from 'mobservable-react';
import appState from '../state/observables';

@observer
export default class Game extends React.Component {
    render() {
        return (
          <div>
            <TimerView appState={appState}/>
          </div>
        );
    }
};
