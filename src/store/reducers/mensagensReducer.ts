import * as MensagensTypes from 'Store/Actions/Mensagens/Types';

interface MensagensState {
    mensagensErro: string[],
    mensagensInformativas: string[],
    mensagensAlertas: string[],
    errosValidacao: string[]
}

const initialState: MensagensState = {
    mensagensErro: [],
    mensagensInformativas: [],
    mensagensAlertas: [],
    errosValidacao: []
}

const MensagensReducer = (state = initialState, action: MensagensTypes.MensagensActionTypes) => {
    switch (action.type) {
        case MensagensTypes.adicionarErroValidacao:
            return { ...state, errosValidacao: [...state.errosValidacao, action.payload] }
        case MensagensTypes.adicionarMensagemErro:
            return { ...state, errosValidacao: [...state.mensagensErro, action.payload] }
        case MensagensTypes.adicionarMensagemInformativa:
            return { ...state, errosValidacao: [...state.mensagensInformativas, action.payload] }
        case MensagensTypes.adicionarMensagemAlerta:
            return { ...state, errosValidacao: [...state.mensagensAlertas, action.payload] }
        case MensagensTypes.removerTodasMensagens:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export { MensagensReducer };
export type MensagensReducerType = MensagensState;