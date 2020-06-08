import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

export const adicionarMensagensRecebidasType = 'MENSAGENS_ADICIONAR_RECEBIDAS';
export const removerTodasMensagensType = 'MENSAGENS_REMOVER_TODOS';

interface AdicionarMensagensRecebidas {
    type: typeof adicionarMensagensRecebidasType,
    payload: RetornoApi.RetornoApi
}

interface RemoverTodasMensagens {
    type: typeof removerTodasMensagensType,
}


export type MensagensActionTypes = AdicionarMensagensRecebidas | RemoverTodasMensagens;