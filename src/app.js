import React, { Component } from 'react';
import {observer} from 'mobservable-react';
import appState from './observables'

@observer
export class TimerView extends React.Component {
    render() {
        return (<button onClick={this.onReset}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }

    onReset = () => {
        this.props.appState.resetTimer();
    };
};
