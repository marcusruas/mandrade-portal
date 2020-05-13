import React from 'react';
import { Layout } from 'antd';

const Cabecalho = () => {
    const { Header } = Layout;
    return (
        <Header className="Cabecalho">
            <span className="Cabecalho_Titulo">
                PORTAL MANDRADE
            </span>
            <span className="Cabecalho_Descricao">
                É MEIO QUE SÓ ISSO MESMO...
            </span>
        </Header>
    );
};

export default Cabecalho;