import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

interface UsuariosState {
    Grupos: Array<Grupo>
}

const initialState: UsuariosState = {
    Grupos: []
}

const UsuariosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GruposTypes.adicionarGrupoType:
            return state;
        default:
            return state;
    }
}

export { UsuariosReducer };
export type UsuariosReducerType = UsuariosState;