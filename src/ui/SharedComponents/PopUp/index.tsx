import React from 'react';
import './index.scss';

interface PropriedadesPopUp {
}

interface StatePopUp {
    Texto: string,
    Tipo?: string,
    Aberto: boolean
}

class PopUp extends React.PureComponent<PropriedadesPopUp, StatePopUp> {
    constructor(props: PropriedadesPopUp) {
        super(props);

        this.state = {
            Texto: '',
            Tipo: 'Sucesso',
            Aberto: false,
        }
    }

    render() {
        const classeTipo = this.state.Tipo ? `PopUp--${this.state.Tipo}` : 'PopUp--Sucesso';
        const popUpAberto = this.state.Aberto === true ? 'PopUp--Abrir' : '';
        return (
            <section className={`PopUp ${classeTipo} ${popUpAberto}`}>
                <span className="PopUp__Cabecalho">
                    {this.state.Texto}
                </span>
            </section>
        );
    }
}

export const Sucesso = (texto: string) => (
    <PopUp />
)

export default PopUp;