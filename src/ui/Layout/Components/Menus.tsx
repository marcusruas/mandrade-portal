import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

import * as Rotas from '../routes';

const Menus = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    return (
        <Sider width={300}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <Menu.Item>
                    <Link to={Rotas.Home.Rota}>Home</Link>
                </Menu.Item>
                <SubMenu key="usuarioApi" title="Usuario API">
                    <SubMenu key="usuarioApiGrupos" title="Grupos">
                        <Menu.Item key="1">
                            <Link to={Rotas.NovoGrupo.Rota}>Cadastrar Novo Grupo</Link>
                        </Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sider >
    );
}

export default Menus;