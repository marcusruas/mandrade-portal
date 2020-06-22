import React, { CSSProperties } from 'react';
import './index.css';

interface PropriedadesBotao {
    Texto: string,
    Estilo?: CSSProperties,
    Tipo?: string,
    onClick: () => void
}

const Botao = (props: PropriedadesBotao) => {
    const classeTipo = props.Tipo ? `Botao_${props.Tipo}` : 'Botao_Padrao';

    return (
        <section
            className={`Botao ${classeTipo}`}
            style={props.Estilo ? { ...props.Estilo } : {}}
            onClick={props.onClick}>
            <span className="Botao_interior">{props.Texto}</span>
        </section>
    );
}

export default Botao;