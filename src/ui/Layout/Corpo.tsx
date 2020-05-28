import React from 'react';
import { Layout } from 'antd'

import NovoGrupo from 'Ui/Usuarios/Grupos/NovoGrupo/';

const Corpo = () => {
    const { Content } = Layout;
    return (
        <Content className="Corpo">
            <NovoGrupo />
        </Content>
    )
}

export default Corpo;