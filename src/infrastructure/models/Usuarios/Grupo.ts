class Grupo {
    Id: number;
    Nome: string;
    Descricao: string;
    Pai: number;

    constructor(
        id: number,
        nome: string,
        descricao: string,
        pai: number
    ) {
        this.Id = id;
        this.Nome = nome;
        this.Descricao = descricao;
        this.Pai = pai;
    }
}

export default Grupo;