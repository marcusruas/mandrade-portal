import React from 'react';
import { Layout } from 'antd';

const Cabecalho = () => {
    const { Header } = Layout;
    return (
        <Header className="Cabecalho">
            <div className="Cabecalho_Titulo">
                PORTAL MANDRADE
            </div>
            <div className="Cabecalho_Descricao">
                É MEIO QUE SÓ ISSO MESMO...
            </div>
        </Header>
    );
};

export default Cabecalho;