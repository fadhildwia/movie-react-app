import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'styles/index.scss';
import { AppProvider } from 'hooks/context';

const { PUBLIC_URL } = process.env

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App basename={PUBLIC_URL} />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
