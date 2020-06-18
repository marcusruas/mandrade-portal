const UsuarioApi = '/Usuarios';

interface Rota {
    Titulo: string,
    Rota: string
}

export const Home: Rota = {
    Titulo: 'Home',
    Rota: '/home'
};

export const NovoGrupo: Rota = {
    Titulo: 'Cadastro de Grupos',
    Rota: `${UsuarioApi}/novoGrupo`
};

export const DadosRotas = [
    Home,
    NovoGrupo
];