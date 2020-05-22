import React from 'react';
import { Dropdown, Button, Layout } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import Mensageria from './Mensageria/';

const Mensagens = (
    <Mensageria />
)

const Cabecalho = () => {
    const { Header } = Layout;
    return (
        <Header className="Cabecalho">
            <span className="Cabecalho_Titulo">
                PORTAL MANDRADE
            </span>
            <span className="Cabecalho_Mensageria">
                <Dropdown overlay={Mensagens} placement="topRight">
                    <Button type="primary" icon={< MessageOutlined />}>Mensagens</Button>
                </Dropdown>
            </span>
        </Header>
    );
};

export default Cabecalho;