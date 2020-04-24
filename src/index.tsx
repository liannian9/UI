import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {Button, ButtonType, ButtonSize} from "react-with-ts";
ReactDOM.render(
  <React.StrictMode>
            <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>button</Button>
            <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled>button</Button>
ButtonType
        <Button disabled>button</Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
