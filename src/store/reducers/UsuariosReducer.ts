import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';
import RetornoSucessoApi from 'Infrastructure/Models/ApiModels/RetornoSucessoApi';

interface UsuariosState {
    Grupos: Array<Grupo>
}

const initialState: UsuariosState = {
    Grupos: []
}

const UsuariosReducer = (state = initialState, action: GruposTypes.UsuariosGrupoTypes) => {
    switch (action.type) {
        case GruposTypes.adicionarGrupoType:
            if (typeof (action.Retorno) === typeof (RetornoSucessoApi)) {

                return { ...state, Grupos: action.Retorno }
            }
            return { ...state, Grupos: action.Retorno }
        default:
            return state;
    }
}

export { UsuariosReducer };
export type UsuariosReducerType = UsuariosState;