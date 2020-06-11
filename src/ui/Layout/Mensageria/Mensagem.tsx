import React from 'react';
import { toast } from 'react-toastify';

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

    mostrarMensagem = () => {
        switch (this.props.Tipo) {
            case 0:
                toast.error(this.props.Texto);
                break;
            case 1:
                toast.info(this.props.Texto);
                break;
            case 2:
                toast.warning(this.props.Texto);
                break;
            case 3:
                toast.info(this.props.Texto);
                break;
            default:
                toast.dark(this.props.Texto)
                break;
        }
    }

    render() {
        return (
            <div
                className="Mensageria_Mensagem"
                style={{ backgroundColor: GetCorByTipo(this.props.Tipo) }}
                onClick={() => this.mostrarMensagem()}
            >
                {this.formatarMensagem(this.props.Texto)}
            </div>
        )
    }
}

export default Mensagem;