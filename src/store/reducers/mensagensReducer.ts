import * as MensagensTypes from 'Store/Actions/Mensagens/Types';
import { RetornoApi } from 'Infrastructure/Models/ApiModels/RetornoApi';

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

const MensagensReducer = (state = initialState, action: MensagensTypes.MensagensActionTypes): MensagensState => {
    switch (action.type) {
        case MensagensTypes.adicionarMensagensRecebidasType:
            return ResolverMensagensRecebidas(state, action.payload);
        case MensagensTypes.removerTodasMensagensType:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

const ResolverMensagensRecebidas = (state: MensagensState, payload: RetornoApi): MensagensState => {
    if (payload.PossuiMensagens()) {
        const mensagensInformativas = payload.Mensagens
            .filter(m => m.Tipo === 1)
            .map(m => m.Texto);
        const mensagensAlertas = payload.Mensagens
            .filter(m => m.Tipo === 2)
            .map(m => m.Texto);
        const mensagensErro = payload.Mensagens
            .filter(m => m.Tipo === 3)
            .map(m => m.Texto);
        const mensagensErroValidacao = payload.Mensagens
            .filter(m => m.Tipo === 4)
            .map(m => m.Texto);

        return {
            ...state,
            mensagensInformativas: [...state.mensagensInformativas.concat(...mensagensInformativas)],
            mensagensAlertas: [...state.errosValidacao.concat(...mensagensAlertas)],
            mensagensErro: [...state.mensagensErro.concat(...mensagensErro)],
            errosValidacao: [...state.errosValidacao.concat(...mensagensErroValidacao)],
        }
    }

    return initialState;
}

export { MensagensReducer };
export type MensagensReducerType = MensagensState;