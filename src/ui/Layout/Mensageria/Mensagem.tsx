import React from 'react';

interface PropriedadesMensagem {
    Tipo: number,
    Texto: string
}

const GetCorByTipo = (tipo: number) => {
    switch (tipo) {
        //De acordo com Reducer
        case 0:
            return "#f5222d";
        case 1:
            return "#1d39c4";
        case 2:
            return "#d4b106";
        case 3:
            return "#0050b3";
        default:
            return "black";
    }
}

class Mensagem extends React.PureComponent<PropriedadesMensagem> {
    formatarMensagem = (mensagem: string) =>
        mensagem && mensagem.length > 30 ?
            mensagem.substring(0, 27) + '...' : mensagem;

    render() {
        return (
            <div className="Mensageria_Mensagem" style={{ backgroundColor: GetCorByTipo(this.props.Tipo) }}>
                {this.formatarMensagem(this.props.Texto)}
            </div>
        )
    }
}

export default Mensagem;