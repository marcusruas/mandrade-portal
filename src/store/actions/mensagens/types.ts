const adicionarErroValidacao = 'MENSAGENS_ADICIONAR_ERRO_VALIDACAO';
const adicionarMensagemErro = 'MENSAGENS_ADICIONAR_ERRO';
const adicionarMensagemInformativa = 'MENSAGENS_ADICIONAR_INFORMATIVO';
const adicionarMensagemAlerta = 'MENSAGENS_ADICIONAR_ALERTA';
const removerTodasMensagens = 'MENSAGENS_REMOVER_TODOS';

interface AdicionarErroValidacao {
    type: typeof adicionarErroValidacao,
    payload: string
}

interface AdicionarMensagemErro {
    type: typeof adicionarMensagemErro,
    payload: string
}

interface AdicionarMensagemInformativa {
    type: typeof adicionarMensagemInformativa,
    payload: string
}

interface AdicionarMensagemAlerta {
    type: typeof adicionarMensagemAlerta,
    payload: string
}

interface RemoverTodasMensagens {
    type: typeof removerTodasMensagens
}


export type MensagensActionTypes =
    AdicionarErroValidacao |
    AdicionarMensagemErro |
    AdicionarMensagemInformativa |
    AdicionarMensagemAlerta |
    RemoverTodasMensagens;

export {
    adicionarErroValidacao,
    adicionarMensagemErro,
    adicionarMensagemInformativa,
    adicionarMensagemAlerta,
    removerTodasMensagens
}