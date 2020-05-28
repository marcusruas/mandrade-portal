import UriApi from 'Infrastructure/Consts';
import FormatarRequisicao from '../../ApiHandler';
import axios from 'axios';

import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    const apiCall = await axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
    const retorno = FormatarRequisicao(apiCall);

    return retorno;
}

export { AdicionarNovoGrupo }