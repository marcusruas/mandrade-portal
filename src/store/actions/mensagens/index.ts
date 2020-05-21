import * as MensagensActionTypes from './types';
import MensagemApi from '../../../infrastructure/models/ApiModels/MensagemApi';

const AdicionarErroValidacao = (mensagem: MensagemApi): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarErroValidacao,
        payload: mensagem
    }
}

const RemoverErroValidacao = (mensagem: MensagemApi): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.removerErroValidacao,
        payload: mensagem
    }
}

export {
    AdicionarErroValidacao,
    RemoverErroValidacao,
}