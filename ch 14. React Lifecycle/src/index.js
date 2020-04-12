import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://582eff115e134b038fd22ca4c667df7c@o376723.ingest.sentry.io/5197847"});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
