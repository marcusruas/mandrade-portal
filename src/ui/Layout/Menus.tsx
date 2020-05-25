import React from 'react';
import { Layout, Menu } from 'antd';

const Menus = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    return (
        <Sider width={300}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="usuarioApi" title="Usuario API">
                    <SubMenu key="usuarioApiGrupos" title="Grupos">
                        <Menu.Item key="1">Cadastrar Novo Grupo</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sider >
    );
}

export default Menus;