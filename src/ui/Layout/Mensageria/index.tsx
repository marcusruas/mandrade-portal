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

const AbrirMensageria = () => {

}

const conector = connect(mapStateToProps, mapDispatchToProps);
type Propriedades = ConnectedProps<typeof conector>;

const PainelMensageria = (props: Propriedades) => {
    return (
        <section className="Mensageria">
            <section className="Mensageria_Controle">
                <Botao Texto="Ver Mensagens" onClick={() => console.log('teste')} />
            </section>
            {props.Mensagens.errosValidacao.map(msg => (<Mensagem Tipo={3} Texto={msg} />))}
            {props.Mensagens.mensagensErro.map(msg => (<Mensagem Tipo={0} Texto={msg} />))}
            {props.Mensagens.mensagensAlertas.map(msg => (<Mensagem Tipo={2} Texto={msg} />))}
            {props.Mensagens.mensagensInformativas.map(msg => (<Mensagem Tipo={1} Texto={msg} />))}
        </section>
    );
}

class Mensageria extends React.PureComponent<Propriedades> {
    render() {
        return (
            PainelMensageria(this.props)
        )
    }
}

export default conector(Mensageria);