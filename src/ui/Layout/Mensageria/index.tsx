import React from 'react';
import Mensagem from './Mensagem';
import Botao from 'Ui/SharedComponents/Botao/';

import { connect, ConnectedProps } from 'react-redux';
import * as MensagensActions from 'Store/Actions/Mensagens';
import { ReducersType } from 'Store/Reducers/index'

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

class Mensageria extends React.PureComponent<Propriedades>{
    Mensagens = () => {
        return (
            <section className="Mensageria_Mensagens">
                <section className="Mensageria_BtnRemoverTodas">
                    <Botao Tipo="Mensageria" Texto="Excluir Todas" />
                </section>
                <section className="Mensageria_Conteudo">
                    {this.props.Mensagens.errosValidacao.map(msg => (<Mensagem Tipo={3} Texto={msg} />))}
                    {this.props.Mensagens.mensagensErro.map(msg => (<Mensagem Tipo={0} Texto={msg} />))}
                    {this.props.Mensagens.mensagensAlertas.map(msg => (<Mensagem Tipo={2} Texto={msg} />))}
                    {this.props.Mensagens.mensagensInformativas.map(msg => (<Mensagem Tipo={1} Texto={msg} />))}
                </section>
            </section>
        )
    }

    render() {
        return (
            <section className="Mensageria">
                <Botao Classe="BtnAbrirMensageria" Texto="Ver Mensagens" />
                {this.Mensagens()}
            </section>
        );
    }
}

export default conector(Mensageria);