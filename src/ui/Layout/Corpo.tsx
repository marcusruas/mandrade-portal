import React from 'react';
import { Layout } from 'antd'
import { Switch, Route } from "react-router-dom";

import * as Rotas from './routes';

import NovoGrupo from 'Ui/Modulos/Usuarios/Grupos/NovoGrupo/';
import Home from 'Ui/Modulos/Home';

const Corpo = () => {
    const { Content } = Layout;
    return (
        <Content className="Corpo">
            <Switch>
                <Route path={Rotas.Home}>
                    <Home />
                </Route>
                <Route path={Rotas.NovoGrupo}>
                    <NovoGrupo />
                </Route>
            </Switch>
        </Content>
    )
}

export default Corpo;