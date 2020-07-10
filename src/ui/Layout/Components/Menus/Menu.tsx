import React from 'react';

interface MenuInterface {
    children: JSX.Element
}

const Menu: React.FC<MenuInterface> = (props) => (
    <section className="Menus__Menu">
        {props.children}
    </section>
)

export default Menu;