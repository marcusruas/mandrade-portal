import React from 'react';

import CabecalhoPagina from 'Ui/SharedComponents/CabecalhoPagina';

class Home extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <CabecalhoPagina Titulo="Home" />

            </React.Fragment>
        )
    }
}

export default Home;