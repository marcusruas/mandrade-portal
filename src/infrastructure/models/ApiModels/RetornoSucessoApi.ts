import MensagemApi from "./MensagemApi";

class RetornoSucessoApi {
    Sucesso: boolean;
    Dados: any;
    Mensagens: Array<MensagemApi>;

    constructor(
        sucesso: boolean,
        dados: any,
        mensagens: Array<MensagemApi>
    ) {
        this.Sucesso = sucesso;
        this.Dados = dados;
        this.Mensagens = mensagens;
    }
}

export default RetornoSucessoApi;