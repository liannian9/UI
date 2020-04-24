import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Button, ButtonType, ButtonSize } from "./testUi";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Large, disabled: true }, "button"),
    "ButtonType",
    React.createElement(Button, { disabled: true }, "button")), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
