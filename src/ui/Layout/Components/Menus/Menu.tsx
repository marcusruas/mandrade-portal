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
        if (!this.props.Titulo && !this.props.children)
            throw new Error('Necessário informar um título ou um filho para o componente de menus.');

        if (!this.props.Titulo && this.props.children && !React.isValidElement(this.props.children))
            return this.props.children;

        if (!this.props.Titulo && this.props.children)
            return this.props.children;

        if (this.props.Titulo && !this.props.children)
            return this.props.Titulo;

        if (this.props.Titulo && this.props.children)
            return (
                <React.Fragment>
                    {this.props.Titulo}
                    <section className="Menus__Menu__Filhos">
                        {this.props.children}
                    </section>
                </React.Fragment>
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