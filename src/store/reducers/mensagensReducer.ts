import * as MensagensTypes from '../actions/mensagens/types';
import MensagemApi from '../../infrastructure/models/ApiModels/MensagemApi';
import * as _ from 'lodash'

interface MensagensState {
    mensagensErro: MensagemApi[],
    mensagensInformativas: MensagemApi[],
    mensagensAlertas: MensagemApi[],
    errosValidacao: MensagemApi[]
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
        default:
            return state;
    }
}

export { MensagensReducer };
export type MensagensReducerType = MensagensState;