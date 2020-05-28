import * as MensagensActionTypes from './Types';

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


const RemoverTodasMensagens = (): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.removerTodasMensagens,
    }
}

export {
    AdicionarErroValidacao,
    RemoverErroValidacao,
    RemoverTodasMensagens,
}