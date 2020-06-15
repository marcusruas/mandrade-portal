import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../FormatarRequisicao';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

const AdicionarNovoGrupo = async (grupo: Grupo): Promise<RetornoApi.RetornoApi> => {
    const requisicao = axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
    return await FormatarRequisicao(requisicao);
}

const ListarTodosGrupos = async (): Promise<RetornoApi.RetornoApi> => {
    const requisicao = axios.post(`${UriApi.USUARIOS_GRUPOS}/ListarTodosGrupos`);
    return await FormatarRequisicao(requisicao);
}

export { AdicionarNovoGrupo, ListarTodosGrupos }