const adicionarErroValidacao = 'MENSAGENS_ADICIONAR_ERRO_VALIDACAO';
const removerErroValidacao = 'MENSAGENS_REMOVER_ERRO_VALIDACAO';

interface AdicionarErroValidacao {
    type: typeof adicionarErroValidacao,
    payload: string
}

interface RemoverErroValidacao {
    type: typeof removerErroValidacao,
    payload: string
}


export type MensagensActionTypes = AdicionarErroValidacao | RemoverErroValidacao;
export {
    adicionarErroValidacao,
    removerErroValidacao
}