import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'antd';

import Cabecalho from './Layout/Cabecalho';
import Menus from './Layout/Menus';
import Corpo from './Layout/Corpo';

import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { Reducers } from 'Store/Reducers'

function App() {
  const store = createStore(Reducers, applyMiddleware(promise));
  return (
    <Provider store={store}>
      <React.Fragment>
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
      </React.Fragment>
    </Provider>
  );
}

export default App;
