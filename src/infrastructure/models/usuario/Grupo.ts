class Grupo {
    Id: number;
    Nome: string;
    Descricao: string;

    constructor(
        id: number,
        nome: string,
        descricao: string
    ) {
        this.Id = id;
        this.Nome = nome;
        this.Descricao = descricao;
    }
}

export default Grupo;