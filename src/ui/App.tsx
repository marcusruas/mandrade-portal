import React from 'react';
import Layout from 'Ui/Layout/';
import PopUp from 'Ui/SharedComponents/PopUp/';

import { Provider } from 'react-redux';
import { Reducers } from 'Store/Reducers'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise';
import MensageriaMiddleware from './Middlewares/MensageriaMiddleware';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const store = createStore(Reducers, applyMiddleware(promise, MensageriaMiddleware));
  return (
    <Provider store={store}>
      <Router>
        <PopUp />
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;
