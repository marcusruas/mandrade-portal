import Grupo from 'Infrastructure/Models/Usuarios/Grupo';
import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import * as GruposService from 'Infrastructure/Services/Usuarios/Grupos';
import { createAsyncAction } from 'redux-promise-middleware-actions';

const AdicionarNovoGrupo = createAsyncAction(
    GruposTypes.adicionarGrupoType,
    async (grupo: Grupo) => await GruposService.AdicionarNovoGrupo(grupo)
);

const ListarTodosGrupos = createAsyncAction(
    GruposTypes.listarTodosGruposType,
    async () => await GruposService.ListarTodosGrupos()
);

export { AdicionarNovoGrupo, ListarTodosGrupos }  