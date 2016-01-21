import {observable} from 'mobservable';

var appState = observable({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);

export default appState;
