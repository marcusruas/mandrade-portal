import axios from 'axios';
import Grupo from '../models/usuario/Grupo';

const AdicionarNovoGrupo = async (grupo: Grupo) => {
    try {
        await axios.post('http://localhost:5000/Usuarios/Grupos/IncluirNovoGrupo', { ...grupo });
    }
    catch (error) {
        console.log(error);
    }
}

export { AdicionarNovoGrupo }