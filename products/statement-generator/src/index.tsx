import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'styles/cssreset.css';
import styles from 'styles/index.module.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './moduleAugmentation';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

function Loading() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader} />
      <h1>Loading</h1>
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
