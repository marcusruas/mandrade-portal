import React from 'react';
import { Input, Button, Row, Col } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import './index.css';

import * as Reducer from 'Store/Reducers/';
import * as GruposActions from 'Store/Actions/Usuarios/Grupos/index';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import CabecalhoPagina from 'Ui/SharedComponents/CabecalhoPagina';

const mapStateToProps = (state: Reducer.ReducersType) => ({
    Grupos: state.Usuarios
});

const mapDispatchToProps = (dispatch: any) => {
    const actions = {
        AdicionarNovoGrupo: (grupo: Grupo) =>
            dispatch(GruposActions.AdicionarNovoGrupo(grupo))
    }

    return actions;
}

const conector = connect(mapStateToProps, mapDispatchToProps);
type Propriedades = ConnectedProps<typeof conector>;

class NovoGrupo extends React.PureComponent<Propriedades> {
    adicionarGrupo = () => {
        this.props.AdicionarNovoGrupo(new Grupo(
            0,
            "teste",
            "teste123",
            0
        ))
    }

    render() {
        return (
            <React.Fragment>
                <CabecalhoPagina Titulo="Cadastro de Grupos" />
                <div className="NovoGrupo">
                    <Row justify="space-between">
                        <Col span={11}><Input placeholder="Nome do Grupo"></Input></Col>
                        <Col span={11}><Input placeholder="Pai do Grupo"></Input></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={24}><Input placeholder="Decrição do Grupo"></Input></Col>
                    </Row>
                    <br />
                    <Row justify="end">
                        <Col span={6}><Button type="primary" onClick={() => this.adicionarGrupo()}>Cadastrar</Button></Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default conector(NovoGrupo);