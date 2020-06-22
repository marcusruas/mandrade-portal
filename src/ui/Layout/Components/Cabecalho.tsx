import React from 'react'
import Mensageria from '../Mensageria';

const Cabecalho = () => {
    return (
        <header className="Cabecalho">
            <section className="Cabecalho_Titulo">
                <span>PORTAL MANDRADE</span>
            </section>
            <section className="Cabecalho_Mensageria">
                <Mensageria />
            </section>
        </header>
    );
};

export default Cabecalho;