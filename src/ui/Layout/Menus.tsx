import React from 'react';
import { Layout, Menu } from 'antd';

const Menus = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    return (
        <Sider width={200}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="usuarioApi" title="UsuarioAPI">
                    <Menu.Item key="1">Grupos</Menu.Item>
                    <Menu.Item key="2">Pessoas</Menu.Item>
                    <Menu.Item key="3">Usuarios</Menu.Item>
                    <Menu.Item key="4">Permissoes</Menu.Item>
                    <Menu.Item key="5">Autenticação</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default Menus;