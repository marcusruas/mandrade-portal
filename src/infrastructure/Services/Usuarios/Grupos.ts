import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../ApiHandler';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

const AdicionarNovoGrupo = async (grupo: Grupo): Promise<RetornoApi.RetornoApi> => {
    try {
        const apiCall = await axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
        const retorno = FormatarRequisicao(apiCall);

        return retorno;
    } catch (error) {
        console.log(error);
        return RetornoApi.ErroPadraoRequisicao;
    }
}

export { AdicionarNovoGrupo }