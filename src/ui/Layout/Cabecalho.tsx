import React from 'react';
import { Layout } from 'antd';
import * as endpoints from '../../infrastructure/services/grupos';
import Grupo from '../../infrastructure/models/usuario/Grupo';

const Cabecalho = () => {
    const { Header } = Layout;
    endpoints.AdicionarNovoGrupo(new Grupo(
        0, '', ''
    ))
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