import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

const adicionarGrupoType = 'USUARIOS_ADICIONAR_GRUPO';

interface AdicionarGrupo {
    type: typeof adicionarGrupoType,
    Retorno: RetornoApi.RetornoApi
}

export { adicionarGrupoType }
export type UsuariosGrupoTypes = AdicionarGrupo;