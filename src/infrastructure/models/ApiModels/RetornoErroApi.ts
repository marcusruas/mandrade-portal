import MensagemApi from "./MensagemApi";

class RetornoErroApi {
    CodigoRetorno: number;
    MensagemPadrao: string;
    DescricaoErro: string;
    Mensagens: Array<MensagemApi>;

    constructor(
        codigoRetorno: number,
        mensagemPadrao: string,
        descricaoErro: string,
        mensagens: Array<MensagemApi>
    ) {
        this.CodigoRetorno = codigoRetorno;
        this.MensagemPadrao = mensagemPadrao;
        this.DescricaoErro = descricaoErro;
        this.Mensagens = mensagens;
    }

    PossuiMensagens() {
        return this.Mensagens && this.Mensagens.length
    }
}

export default RetornoErroApi;