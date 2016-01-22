import React, { Component } from 'react';
import {observer} from 'mobservable-react';
import appState from './observables';

@observer
export class popup extends react.Component{
  var popup= function(){
    if (appState.timer = 0){
      return(
        <p> Fallaste <p/>
      )
    }
  }
  render() {
    return(
      {popup}
    )
  }
};
