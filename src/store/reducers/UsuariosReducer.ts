import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';
import { RetornoApi } from 'Infrastructure/Models/ApiModels/RetornoApi';
import { toast } from 'react-toastify';

interface UsuariosState {
    Grupos: Array<Grupo>
}

const initialState: UsuariosState = {
    Grupos: []
}

const UsuariosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GruposTypes.adicionarGrupoType:
            ResolverAdicionarGrupo(action.payload);
            return state;
        default:
            return state;
    }
}

const ResolverAdicionarGrupo = (payload: RetornoApi) => {
    if (payload.Sucesso === true)
        toast.success('Grupo adicionado com sucesso!');
}

export { UsuariosReducer };
export type UsuariosReducerType = UsuariosState;