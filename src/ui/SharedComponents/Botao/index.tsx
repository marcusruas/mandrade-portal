import React from 'react';
import './index.css';

interface PropriedadesBotao {
    Texto: string
}

const Botao = (props: PropriedadesBotao) => {
    return (
        <div className="Botao">
            <span className="Botao_interior">{props.Texto}</span>
        </div>
    );
}

export default Botao;