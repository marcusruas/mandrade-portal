import React from 'react';
import { Layout, Menu } from 'antd';

const Menus = () => {
    const { Sider } = Layout;
    return (
        <Sider width={300}>
            <Menu className="Menus" mode="inline" style={{ height: '100%', borderRight: 0 }}>
            </Menu>
        </Sider>
    );
}

export default Menus;