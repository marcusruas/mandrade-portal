import React from 'react';
import { Layout } from 'antd'
import { Switch, Route } from "react-router-dom";
import CabecalhoPagina from 'Ui/SharedComponents/CabecalhoPagina';
import { useLocation } from 'react-router-dom'

import * as Rotas from './routes';

import NovoGrupo from 'Ui/Modulos/Usuarios/Grupos/NovoGrupo/';
import Home from 'Ui/Modulos/Home';

const Corpo = () => {
    const { Content } = Layout;

    const localizacao = useLocation();
    const rotaAtual = localizacao.pathname;
    const titulo = Rotas.DadosRotas.find(r => r.Rota === rotaAtual)?.Titulo || 'Home'

    return (
        <Content className="Corpo">
            <CabecalhoPagina Titulo={titulo} />
            <Switch>
                <Route path={Rotas.Home.Rota}>
                    <Home />
                </Route>
                <Route path={Rotas.NovoGrupo.Rota}>
                    <NovoGrupo />
                </Route>
            </Switch>
        </Content>
    );
}

export default Corpo;