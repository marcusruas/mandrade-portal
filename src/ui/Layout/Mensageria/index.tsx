import React from 'react';
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import * as MensagensActions from 'Store/Actions/Mensagens';
import { ReducersType } from 'Store/Reducers/index';

import Mensagem from './Mensagem';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: ReducersType) => ({
    Mensagens: state.Mensagens
});

const mapDispatchToProps = (dispatch: any) => {
    const actions = {
        removerTodasMensagens: () =>
            dispatch(MensagensActions.RemoverTodasMensagens()),
    }

    return actions;
}

const conector = connect(mapStateToProps, mapDispatchToProps);
type Propriedades = ConnectedProps<typeof conector>;

class Mensageria extends React.PureComponent<Propriedades> {
    render() {
        return (
            <section className="Mensageria">
                <section className="Mensageria_Controle">
                    <Button
                        danger
                        icon={< CloseCircleOutlined />}
                        onClick={() => this.props.removerTodasMensagens()}
                    >Excluir Tudo</Button>
                </section>
                {this.props.Mensagens.errosValidacao.map(msg => (<Mensagem Tipo={3} Texto={msg} />))}
                {this.props.Mensagens.mensagensErro.map(msg => (<Mensagem Tipo={0} Texto={msg} />))}
                {this.props.Mensagens.mensagensAlertas.map(msg => (<Mensagem Tipo={2} Texto={msg} />))}
                {this.props.Mensagens.mensagensInformativas.map(msg => (<Mensagem Tipo={1} Texto={msg} />))}
            </section>
        )
    }
}

export default conector(Mensageria);