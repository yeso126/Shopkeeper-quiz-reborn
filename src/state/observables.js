import {observable} from 'mobservable';

var appState = observable({
    timer: 1000,
    perdiste: false
});

var timer = function () {
  if (appState.timer < 0) {
    appState.perdiste = true;
    clearInterval(countdown);
    appState.timer = 0;
  }
};

var countdown = function(){
  setInterval(() => {
    appState.timer -=80;
    timer();
  }, 1000);
};

// Crea nueva instancia del conteo regresivo
var y = new countdown;

appState.resetTimer = function() {
    appState.timer = 1000;
    appState.perdiste = false;
    timer();
};


export default appState;
