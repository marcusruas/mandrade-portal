import React, { CSSProperties } from 'react';

interface ParametrosCabecalho {
    Titulo: string
}

const CabecalhoPagina = (parametros: ParametrosCabecalho) => {
    const estiloCabecalho: CSSProperties = {
        width: '100%',
        height: '10%',
        backgroundColor: 'darkgray',
    }

    const estiloTexto: CSSProperties = {
        padding: '12px',
        textAlign: 'left',
        color: '#030852',
        fontWeight: 'bold',
        fontSize: '20px'
    }

    return (
        <div style={estiloCabecalho}>
            <h1 style={estiloTexto}>{parametros.Titulo}</h1>
        </div>
    )
}

export default CabecalhoPagina