class MensagemApi {
    Tipo: number;
    Texto: string;
    constructor(
        tipo: number,
        texto: string
    ) {
        this.Tipo = tipo;
        this.Texto = texto;
    }
}

export default MensagemApi;