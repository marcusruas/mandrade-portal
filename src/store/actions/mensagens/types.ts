const adicionarErroValidacao = 'MENSAGENS_ADICIONAR_ERRO_VALIDACAO';
const removerErroValidacao = 'MENSAGENS_REMOVER_ERRO_VALIDACAO';
const removerTodasMensagens = 'MENSAGENS_REMOVER_TODOS';

interface AdicionarErroValidacao {
    type: typeof adicionarErroValidacao,
    payload: string
}

interface RemoverErroValidacao {
    type: typeof removerErroValidacao,
    payload: string
}

interface RemoverTodasMensagens {
    type: typeof removerTodasMensagens
}


export type MensagensActionTypes = AdicionarErroValidacao | RemoverErroValidacao | RemoverTodasMensagens;
export {
    adicionarErroValidacao,
    removerErroValidacao,
    removerTodasMensagens
}