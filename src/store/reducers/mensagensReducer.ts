import * as MensagensTypes from '../actions/mensagens/types';

const initialState = {
    mensagensErro: [],
    mensagensInformativas: [],
    mensagensAlertas: [],
    errosValidacao: []
}

const MensagensReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case MensagensTypes.adicionarErroValidacao:
            return { ...state, errosValidacao: [...state.errosValidacao] }
        default:
            return state;
    }
}

export default MensagensReducer;