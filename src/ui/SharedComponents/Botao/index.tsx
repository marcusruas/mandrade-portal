import React, { CSSProperties } from 'react';
import './index.css';

interface PropriedadesBotao {
    Texto: string,
    Estilo?: CSSProperties,
    Tipo?: string,
    Classe?: string,
    onClick?: () => void
}

const Botao = (props: PropriedadesBotao) => {
    const classeTipo = props.Tipo ? `Botao_${props.Tipo}` : 'Botao_Padrao';

    const propriedadesPassadas = {
        className: `Botao ${classeTipo} ${props.Classe}`,
        style: props.Estilo ? { ...props.Estilo } : {},
        onClick: props.onClick || (() => null)
    }

    return (
        <section {...propriedadesPassadas}>
            <span className="Botao_interior">{props.Texto}</span>
        </section>
    );
}

export default Botao;