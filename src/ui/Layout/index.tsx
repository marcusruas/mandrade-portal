import React from 'react';
import Cabecalho from './Components/Cabecalho';
import Menus from './Components/Menus';

import './index.css';

const Layout = () => {
    return (
        <React.Fragment>
            <Cabecalho />
            <Menus />
        </React.Fragment>
    )
}

export default Layout;