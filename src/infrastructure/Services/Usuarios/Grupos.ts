import UriApi from 'Infrastructure/Consts';
import GerenciarRequisicao from '../../ApiHandler';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

const AdicionarNovoGrupo = (grupo: Grupo): Array<Grupo> => {
    const retorno = GerenciarRequisicao(axios.post(
        `${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo }
    ));
    console.log(retorno);
    return [];
}

export { AdicionarNovoGrupo }