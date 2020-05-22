import React from 'react';
import { Layout, Menu } from 'antd';

const Menus = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    return (
        <Sider width={300}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1" title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider >
    );
}

export default Menus;