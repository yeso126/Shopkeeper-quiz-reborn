import React, { Component } from 'react';
import {observer} from 'mobservable-react';


@observer
export class TimerView extends React.Component {
    render() {
        return (
          <div>
            <span>
              Puntos: {this.props.appState.timer}
            </span>
            <button onClick={this.onReset}>
              rest
            </button>
          </div>
          );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    };
};
