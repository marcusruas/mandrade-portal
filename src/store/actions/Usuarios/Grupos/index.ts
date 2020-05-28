import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import * as GruposService from 'Infrastructure/Services/Usuarios/Grupos';

const AdicionarNovoGrupo = (grupo: Grupo): GruposTypes.UsuariosGrupoTypes => {
    return {
        type: GruposTypes.adicionarGrupoType,
        Retorno: GruposService.AdicionarNovoGrupo(grupo),
    }
}

export { AdicionarNovoGrupo }