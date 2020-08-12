import React, { CSSProperties } from 'react';

interface MenuInterface {
    Titulo?: string,
    children?: JSX.Element | string,
    Classe?: string,
    Estilo?: CSSProperties,
}

const classeFilha = "Menus__Menu";

class Menu extends React.PureComponent<MenuInterface> {
    renderizarSubMenu = () => {
        if (!React.isValidElement(this.props.children))
            return this.props.children;

        return (
            <section>
                {this.props.Titulo}
                {this.props.children}
            </section>
        );
    }

    render() {
        const classe = this.props.Classe || "";
        const estilo = this.props.Estilo ? { ...this.props.Estilo } : {};

        return (
            <section className={`${classeFilha} ${classe}`} style={estilo}>
                {this.renderizarSubMenu()}
            </section>
        )
    }
}

export default Menu;