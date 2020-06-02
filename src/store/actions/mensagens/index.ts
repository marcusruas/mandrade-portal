import * as MensagensActionTypes from './Types';

const AdicionarErroValidacao = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarErroValidacao,
        payload: mensagem
    }
}

const AdicionarMensagemErro = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarMensagemErro,
        payload: mensagem
    }
}

const AdicionarMensagemInformativa = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarMensagemInformativa,
        payload: mensagem
    }
}

const AdicionarMensagemAlerta = (mensagem: string): MensagensActionTypes.MensagensActionTypes => {
    return {
        type: MensagensActionTypes.adicionarMensagemAlerta,
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
    AdicionarMensagemErro,
    AdicionarMensagemInformativa,
    AdicionarMensagemAlerta,
    RemoverTodasMensagens,
}