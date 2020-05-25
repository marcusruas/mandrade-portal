import UriApi from 'infrastructure/consts';
import GerenciarRequisicao from '../ApiHandler';
import axios from 'axios';

import Grupo from 'infrastructure/models/usuario/Grupo';

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    const retorno = GerenciarRequisicao(axios.post(
        `${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo }
    ));
    console.log(retorno)
}

export { AdicionarNovoGrupo }