import axios from 'axios';
import Grupo from '../models/usuario/Grupo';
import UriApi from '../consts';

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    try {
        const retorno = await axios.post(`${UriApi.USUARIOS_GRUPOS}/IncluirNovoGrupo`, { ...grupo });
    }
    catch (error) {
        console.log(error);
    }
}

export { AdicionarNovoGrupo }