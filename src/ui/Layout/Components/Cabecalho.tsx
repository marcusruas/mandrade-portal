import React from 'react'
import Mensageria from '../Mensageria';

const Cabecalho = () => {
    return (
        <header className="Cabecalho">
            <section className="Cabecalho__Titulo">
                <span>PORTAL MANDRADE</span>
            </section>
            <section className="Cabecalho__Mensageria">
                <Mensageria />
            </section>
        </header>
    );
};

export default Cabecalho;