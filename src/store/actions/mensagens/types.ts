import MensagemApi from "../../../infrastructure/models/ApiModels/MensagemApi";
import * as MensagensTypes from './types';


const adicionarErroValidacao = 'MENSAGENS_ADICIONAR_ERRO_VALIDACAO';
const removerErroValidacao = 'MENSAGENS_REMOVER_ERRO_VALIDACAO';

interface AdicionarErroValidacao {
    type: typeof MensagensTypes.adicionarErroValidacao,
    payload: MensagemApi
}

interface RemoverErroValidacao {
    type: typeof MensagensTypes.removerErroValidacao,
    payload: MensagemApi
}


export type MensagensActionTypes = AdicionarErroValidacao | RemoverErroValidacao;
export {
    adicionarErroValidacao,
    removerErroValidacao
}