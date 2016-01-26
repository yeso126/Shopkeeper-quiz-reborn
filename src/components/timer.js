import React, { Component } from 'react';
import {observer} from 'mobservable-react';


@observer
export class TimerView extends React.Component {
    render() {
        return (
          <button onClick={this.onReset}>
            Puntos: {this.props.appState.timer}
          </button>);
    }

    onReset = () => {
        this.props.appState.resetTimer();
    };
};
