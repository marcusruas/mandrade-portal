import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import * as _ from 'lodash'
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

interface UsuariosState {
    Grupos: Array<Grupo>
}

const initialState: UsuariosState = {
    Grupos: []
}

const UsuariosReducer = (state = initialState, action: GruposTypes.UsuariosGrupoTypes) => {
    switch (action.type) {
        case GruposTypes.adicionarGrupoType:
            return { ...state, Grupos: action.Retorno }
        default:
            return state;
    }
}

export { UsuariosReducer };
export type UsuariosReducerType = UsuariosState;