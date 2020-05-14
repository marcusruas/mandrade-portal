import React from 'react';
import { Layout, Menu } from 'antd';

const Menus = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    return (
        <Sider width={300}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="usuario" title="UsuarioAPI">
                    <SubMenu key="usuarioGrupos" title="Grupos">
                        <Menu.Item key="1">Cadastrar novo grupo</Menu.Item>
                        <Menu.Item key="2">Buscar grupo</Menu.Item>
                        <Menu.Item key="3">Deletar grupo</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default Menus;