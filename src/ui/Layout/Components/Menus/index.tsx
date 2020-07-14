import React from 'react';
import Menu from './Menu';
import Filho from './Filho';
import { Link } from "react-router-dom";

import * as Rotas from '../../routes';

const Menus = () => {
    return (
        <aside className="Menus">
            <Menu><Link to={Rotas.Home.Rota}>Home</Link></Menu>
            <Menu Descricao="UsuarioAPI">
                <Filho />
            </Menu>
            {/* <Menu><Link to={Rotas.NovoGrupo.Rota}>Cadastrar Novo Grupo</Link></Menu> */}
        </aside>
    );
}

export default Menus;