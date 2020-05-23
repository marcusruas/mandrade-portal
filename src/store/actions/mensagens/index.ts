import * as MensagensActionTypes from './types';

const AdicionarErroValidacao = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarErroValidacao,
        payload: mensagem
    }
}

const RemoverErroValidacao = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.removerErroValidacao,
        payload: mensagem
    }
}

export {
    AdicionarErroValidacao,
    RemoverErroValidacao,
}