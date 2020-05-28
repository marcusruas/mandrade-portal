import Grupo from "Infrastructure/Models/Usuarios/Grupo";

const adicionarGrupoType = 'USUARIOS_ADICIONAR_GRUPO';

interface AdicionarGrupo {
    type: typeof adicionarGrupoType,
    Retorno: Array<Grupo>
}

export { adicionarGrupoType }
export type UsuariosGrupoTypes = AdicionarGrupo;