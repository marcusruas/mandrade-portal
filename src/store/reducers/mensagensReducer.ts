import * as MensagensTypes from '../actions/mensagens/types';

interface MensagensState {
    mensagensErro: [],
    mensagensInformativas: [],
    mensagensAlertas: [],
    errosValidacao: []
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
            return { ...state, errosValidacao: [...state.errosValidacao] }
        case MensagensTypes.removerErroValidacao:
            return { ...state, errosValidacao: [...state.errosValidacao.filter(m => m !== action.payload)] }
        default:
            return state;
    }
}

export { MensagensReducer };
export type { MensagensState };