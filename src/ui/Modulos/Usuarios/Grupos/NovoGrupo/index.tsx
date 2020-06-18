import React from 'react';
import { Input, Button, Row, Col, Form, Select } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import './index.css';

import * as Reducer from 'Store/Reducers/';
import * as GruposActions from 'Store/Actions/Usuarios/Grupos/index';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

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
        const { Option } = Select;
        const { GruposCadastrados } = this.props.Grupos;
        const opcoes = GruposCadastrados.map(grupo => <Option value={grupo.Id}>{grupo.Nome}</Option>);

        return (
            <React.Fragment>
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
                                    <Select
                                        placeholder={'Pesquise um grupo cadastrado.'}
                                    >
                                        {opcoes}
                                    </Select>
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
                            <Col span={6}><Button type="primary" htmlType="submit">Cadastrar</Button></Col>
                        </Row>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default conector(NovoGrupo);