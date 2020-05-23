import * as MensagensTypes from 'store/actions/mensagens/types';
import * as _ from 'lodash'

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
        case MensagensTypes.removerErroValidacao:
            return {
                ...state,
                errosValidacao: [...state.errosValidacao.filter(m => !_.isEqual(m, action.payload))]
            }
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