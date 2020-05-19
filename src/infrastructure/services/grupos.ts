import axios from 'axios';

import Grupo from '../models/usuario/Grupo';
import UriApi from '../consts';
import GerenciarRequisicao from '../ApiHandler';

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    GerenciarRequisicao(
        axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo })
    );
}

export { AdicionarNovoGrupo }