import React, { CSSProperties } from 'react';
import './index.scss';

interface PropriedadesBotao {
    Texto: string,
    Estilo?: CSSProperties,
    Tipo?: string,
    Classe?: string,
    onClick?: () => void
}

const Botao = (props: PropriedadesBotao) => {
    const classeTipo = props.Tipo ? `Botao--${props.Tipo}` : 'Botao--Padrao';

    const propriedadesPassadas = {
        className: `Botao ${classeTipo} ${props.Classe ? props.Classe : ''}`,
        style: props.Estilo ? { ...props.Estilo } : {},
        onClick: props.onClick || (() => null)
    }

    console.log(propriedadesPassadas);

    return (
        <section {...propriedadesPassadas}>
            <span className="Botao__interior">{props.Texto}</span>
        </section>
    );
}

export default Botao;