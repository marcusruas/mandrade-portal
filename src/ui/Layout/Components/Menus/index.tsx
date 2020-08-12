import React from 'react';
import Menu from './Menu';
import { Link } from "react-router-dom";

import * as Rotas from '../../routes';

const Menus = () => {
    return (
        <aside className="Menus">
            <Menu><Link style={{ width: '100%' }} to={Rotas.Home.Rota}>Home</Link></Menu>
            <Menu>UsuarioAPI</Menu>
        </aside>
    );
}

export default Menus;