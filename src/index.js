// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import './index.css';
import App from './App';
//those are required libraries and components are imported at the beginning of the code. In this case, react, react-dom, Provider, createStore, rootReducer, and other files are imported.

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// is rendered using the ReactDOM.render method. The Provider component from react-redux wraps the App component, which allows the entire application to have access to the Redux store.
