import React from 'react';
import Menu from './Menu';
import { Link } from "react-router-dom";

import * as Rotas from '../../routes';

{/* <Link to={Rotas.Home.Rota}>Home</Link>
 */}

const Menus = () => {
    return (
        <aside className="Menus">
            <Menu><Link to={Rotas.Home.Rota}>Home</Link></Menu>
            <Menu><Link to={Rotas.NovoGrupo.Rota}>Cadastrar Novo Grupo</Link></Menu>
        </aside>
    );
}

export default Menus;