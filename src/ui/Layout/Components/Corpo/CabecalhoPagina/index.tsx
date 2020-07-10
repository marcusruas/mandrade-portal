import React from 'react';
import './index.css';

interface ParametrosCabecalho {
    Titulo: string
}

const CabecalhoPagina = (parametros: ParametrosCabecalho) => {
    return (
        <div className="CabecalhoPagina">
            <h1 className="CabecalhoPagina__Titulo">{parametros.Titulo.toUpperCase()}</h1>
        </div>
    )
}

export default CabecalhoPagina