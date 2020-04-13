import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import * as serviceWorker from './serviceWorker';

const Display = () => {
    var display = [<Greeter />];

    for (let x = 1; x <= 10; x++) {
        display[x] = <LikeButton />;
    }

    return display;

};

ReactDOM.render(
    <Display />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
