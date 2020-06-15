import Grupo from 'Infrastructure/Models/Usuarios/Grupo';
import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../FormatarRequisicao';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdicionarNovoGrupo = async (grupo: Grupo): Promise<RetornoApi.RetornoApi> => {
    const requisicao = axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
    const retorno = await FormatarRequisicao(requisicao);
    if (retorno.Sucesso === true)
        toast.success('Grupo adicionado com sucesso!');

    return retorno;
}

const ListarTodosGrupos = async (): Promise<RetornoApi.RetornoApi> => {
    const requisicao = axios.get(`${UriApi.USUARIOS_GRUPOS}/ListarTodosGrupos`);
    return await FormatarRequisicao(requisicao);
}

export { AdicionarNovoGrupo, ListarTodosGrupos }