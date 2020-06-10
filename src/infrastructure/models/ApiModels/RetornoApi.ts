import MensagemApi from "./MensagemApi";

export class RetornoApi {
    Sucesso: boolean;
    Mensagens: Array<MensagemApi>;

    constructor(
        sucesso: boolean,
        mensagens: Array<MensagemApi>
    ) {
        this.Sucesso = sucesso;
        this.Mensagens = mensagens;
    }

    PossuiMensagens() {
        return this.Mensagens && this.Mensagens.length > 0
    }
}

export class RetornoSucesso<T> extends RetornoApi {
    Dados: T;

    constructor(
        dados: T,
        mensagens: Array<MensagemApi>
    ) {
        super(true, mensagens);
        this.Dados = dados;
        this.Mensagens = mensagens;
    }
}


export class RetornoErro extends RetornoApi {
    CodigoRetorno: number;
    MensagemPadrao: string;
    DescricaoErro: string;

    constructor(
        codigoRetorno: number,
        mensagemPadrao: string,
        descricaoErro: string,
        mensagens: Array<MensagemApi>
    ) {
        super(false, mensagens);
        this.CodigoRetorno = codigoRetorno;
        this.MensagemPadrao = mensagemPadrao;
        this.DescricaoErro = descricaoErro;
    }
}

export const ErroPadraoRequisicao = new RetornoErro(
    7050,
    'Não foi possível validar as informações passadas. Tente novamente mais tarde',
    'Não foi possível se conectar com a API para realizar a requisição.',
    [new MensagemApi(3, 'Erro ao realizar requisição')]
);