import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import { Reducers } from 'Store/Reducers'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise';
import MensageriaMiddleware from './Middlewares/MensageriaMiddleware';

import Layout from 'Ui/Layout/';


function App() {
  const store = createStore(Reducers, applyMiddleware(promise, MensageriaMiddleware));
  return (
    <Provider store={store}>
      <Router>
        <Layout />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
