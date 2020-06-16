import Grupo from 'Infrastructure/Models/Usuarios/Grupo';
import { PadraoRetornoActions } from 'Store/Utils';
import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

export interface UsuarioApiReducerState {
    GruposCadastrados: Array<Grupo>
}

export const usuarioApiReducerInitialState: UsuarioApiReducerState = {
    GruposCadastrados: []
}

const GruposReducer = (
    state: UsuarioApiReducerState = usuarioApiReducerInitialState,
    action: PadraoRetornoActions
) => {
    switch (action.type) {
        case GruposTypes.listarTodosGruposType:
            return ResolverListarTodosGrupos(state, action.payload);
        default:
            return state;
    }
}

const ResolverListarTodosGrupos = (
    state: UsuarioApiReducerState,
    payload: RetornoApi.RetornoApi
): UsuarioApiReducerState => {
    if (payload.Sucesso === true) {
        if (payload instanceof RetornoApi.RetornoSucesso) {
            return {
                ...state,
                GruposCadastrados: payload.Dados.map((grupo: any) => new Grupo(
                    grupo.id,
                    grupo.nome,
                    grupo.descricao,
                    grupo.pai
                ))
            }
        }
    }
    return usuarioApiReducerInitialState;
}


export default GruposReducer;