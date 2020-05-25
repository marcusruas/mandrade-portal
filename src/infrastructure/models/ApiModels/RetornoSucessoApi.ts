import MensagemApi from "./MensagemApi";

class RetornoSucessoApi {
    sucesso: boolean;
    dados: any;
    mensagens: Array<MensagemApi>;

    constructor(
        sucesso: boolean,
        dados: any,
        mensagens: Array<MensagemApi>
    ) {
        this.sucesso = sucesso;
        this.dados = dados;
        this.mensagens = mensagens;
    }
}

export default RetornoSucessoApi;