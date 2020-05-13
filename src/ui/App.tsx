import React from 'react';
import { Layout } from 'antd';

import Cabecalho from './Layout/Cabecalho';
import Menus from './Layout/Menus';

function App() {
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Cabecalho />
        <Layout>
          <Menus />
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

export default App;
