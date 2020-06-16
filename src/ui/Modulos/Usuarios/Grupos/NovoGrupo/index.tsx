import React from 'react';
import { Input, Button, Row, Col, Form } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import './index.css';

import * as Reducer from 'Store/Reducers/';
import * as GruposActions from 'Store/Actions/Usuarios/Grupos/index';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import CabecalhoPagina from 'Ui/SharedComponents/CabecalhoPagina';

const mapStateToProps = (state: Reducer.ReducersType) => ({
    Grupos: state.UsuarioApiGruposReducer
});

const mapDispatchToProps = (dispatch: any) => {
    const actions = {
        AdicionarNovoGrupo: (grupo: Grupo) =>
            dispatch(GruposActions.AdicionarNovoGrupo(grupo)),
        ListarTodosGrupos: () =>
            dispatch(GruposActions.ListarTodosGrupos()),
    }

    return actions;
}

const conector = connect(mapStateToProps, mapDispatchToProps);
type Propriedades = ConnectedProps<typeof conector>;

class NovoGrupo extends React.PureComponent<Propriedades> {
    componentDidMount() {
        this.setup();
    }

    setup = () => {
        this.props.ListarTodosGrupos();
    }

    adicionarGrupo = (dados: any) => {
        const novoGrupo = new Grupo(
            0,
            dados.nomeGrupo || null,
            dados.descricaoGrupo || null,
            dados.paiGrupo || null
        )

        this.props.AdicionarNovoGrupo(novoGrupo);
    }

    render() {
        const { Item } = Form;
        return (
            <React.Fragment>
                <CabecalhoPagina Titulo="Cadastro de Grupos" />
                <div className="NovoGrupo">
                    <Form onFinish={this.adicionarGrupo}>
                        <br />
                        <Row justify="space-between">
                            <Col span={11}>
                                <Item name="nomeGrupo" label="Nome do Grupo">
                                    <Input />
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item name="paiGrupo" label="Pai do Grupo">
                                    <Input />
                                </Item>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={24}>
                                <Item name="descricaoGrupo" label="Descrição do Grupo">
                                    <Input />
                                </Item>
                            </Col>
                        </Row>
                        <br />
                        <Row justify="end">
                            <Col span={6}><Button type="primary" onClick={() => console.log(this.props.Grupos)}>Teste</Button></Col>
                            <Col span={6}><Button type="primary" htmlType="submit">Cadastrar</Button></Col>
                        </Row>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default conector(NovoGrupo);