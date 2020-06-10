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
            return ResolverMensagensRecebidas(action.payload);
        case MensagensTypes.removerTodasMensagensType:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

const ResolverMensagensRecebidas = (payload: RetornoApi): MensagensState => {
    console.log(payload);
    return initialState;
}

export { MensagensReducer };
export type MensagensReducerType = MensagensState;