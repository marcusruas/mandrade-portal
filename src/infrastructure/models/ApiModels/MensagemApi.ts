class MensagemApi {
    tipo: number;
    texto: string;
    constructor(
        tipo: number,
        texto: string
    ) {
        this.tipo = tipo;
        this.texto = texto;
    }
}

export default MensagemApi;