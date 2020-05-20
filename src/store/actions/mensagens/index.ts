import MensagemApi from "../../../infrastructure/models/ApiModels/MensagemApi";

import * as MensagensTypes from './types';


const AdicionarMensagem = (mensagem: MensagemApi) => {
    return {
        type: MensagensTypes.adicionarErroValidacao,
        payload: mensagem
    }
}

export {
    AdicionarMensagem
}