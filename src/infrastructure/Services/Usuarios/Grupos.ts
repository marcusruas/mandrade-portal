import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../ApiHandler';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

const AdicionarNovoGrupo = async (grupo: Grupo): Promise<RetornoApi.RetornoApi> => {
    const requisicao = axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
    return await FormatarRequisicao(requisicao);
}

export { AdicionarNovoGrupo }