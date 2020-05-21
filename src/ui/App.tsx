import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'antd';

import Cabecalho from './Layout/Cabecalho';
import Menus from './Layout/Menus';
import Corpo from './Layout/Corpo';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { Reducers } from '../store/reducers'

function App() {
  const store = createStore(Reducers);
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
