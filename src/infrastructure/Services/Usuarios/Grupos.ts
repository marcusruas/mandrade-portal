import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../ApiHandler';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

import RetornoErroApi from 'Infrastructure/Models/ApiModels/RetornoErroApi';
import RetornoSucessoApi from 'Infrastructure/Models/ApiModels/RetornoSucessoApi';

export type TipoRetorno = RetornoErroApi | RetornoSucessoApi | null;

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    try {
        const apiCall = await axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
        const retorno = FormatarRequisicao(apiCall);

        return retorno;
    } catch (error) {
        console.log(error);
    }
}

export { AdicionarNovoGrupo }