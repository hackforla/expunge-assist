import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'styles/cssreset.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './moduleAugmentation';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
