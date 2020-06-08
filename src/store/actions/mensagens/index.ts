import * as MensagensTypes from 'Store/Actions/Mensagens/Types';
import { RetornoApi } from 'Infrastructure/Models/ApiModels/RetornoApi';

export const AdicionarMensagensRecebidas = (retorno: RetornoApi): MensagensTypes.MensagensActionTypes => ({
    type: MensagensTypes.adicionarMensagensRecebidasType,
    payload: retorno
});

export const RemoverTodasMensagens = (): MensagensTypes.MensagensActionTypes => ({
    type: MensagensTypes.removerTodasMensagensType,
})