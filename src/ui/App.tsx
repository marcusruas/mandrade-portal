import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'antd';

import Cabecalho from './Layout/Cabecalho';
import Menus from './Layout/Menus';
import Corpo from './Layout/Corpo';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import MensageriaMiddleware from './Middlewares/MensageriaMiddleware';

import { Reducers } from 'Store/Reducers'

function App() {
  const store = createStore(Reducers, applyMiddleware(promise, MensageriaMiddleware));
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Layout style={{ minHeight: "100vh" }}>
            <Cabecalho />
            <Layout>
              <Menus />
              <Layout>
                <Corpo />
              </Layout>
            </Layout>
          </Layout>
          <ToastContainer />
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
