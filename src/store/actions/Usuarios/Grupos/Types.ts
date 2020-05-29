import Grupo from "Infrastructure/Models/Usuarios/Grupo";
import * as GruposTipo from 'Infrastructure/Services/Usuarios/Grupos';

const adicionarGrupoType = 'USUARIOS_ADICIONAR_GRUPO';

interface AdicionarGrupo {
    type: typeof adicionarGrupoType,
    Retorno: GruposTipo.TipoRetorno
}

export { adicionarGrupoType }
export type UsuariosGrupoTypes = AdicionarGrupo;