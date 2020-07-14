import React from 'react';

interface MenuInterface {
    Descricao?: string
    children: JSX.Element | string
}

const Menu: React.FC<MenuInterface> = (props) => {
    const descricao = props.Descricao ? (<span>{props.Descricao}</span>) : null;
    return (
        <section className="Menus__Menu">
            {descricao}
            {props.children}
        </section>
    )
}


export default Menu;