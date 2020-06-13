import React from 'react';
import { Layout } from 'antd'
import { Switch, Route } from "react-router-dom";

import * as Rotas from './routes';
import NovoGrupo from 'Ui/Usuarios/Grupos/NovoGrupo/';

const Corpo = () => {
    const { Content } = Layout;
    return (
        <Content className="Corpo">
            <Switch>
                <Route path={Rotas.NovoGrupo}>
                    <NovoGrupo />
                </Route>
            </Switch>
        </Content>
    )
}

export default Corpo;