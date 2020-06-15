import React from 'react';
import './index.css';

import CabecalhoPagina from 'Ui/SharedComponents/CabecalhoPagina';

class Home extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <CabecalhoPagina Titulo="Home" />
                <div className="homeLogo">
                    HELLO THERE
                </div>
            </React.Fragment>
        )
    }
}

export default Home;