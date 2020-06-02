import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import * as GruposTypes from 'Store/Actions/Usuarios/Grupos/Types';
import * as GruposService from 'Infrastructure/Services/Usuarios/Grupos';
import { CriarActionChamadaAPIAsync } from '../../Utils';

const AdicionarNovoGrupo = CriarActionChamadaAPIAsync(
    GruposTypes.adicionarGrupoType,
    async (grupo: Grupo) => await GruposService.AdicionarNovoGrupo(grupo)
);

export { AdicionarNovoGrupo }  