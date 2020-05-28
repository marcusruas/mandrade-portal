import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import * as Reducer from 'Store/Reducers/';
import * as GruposActions from 'Store/Actions/Usuarios/Grupos/';
import Grupo from 'Infrastructure/Models/Usuarios/Grupo';

const mapStateToProps = (state: Reducer.ReducersType) => ({
    Grupos: state.Usuarios
});

const mapDispatchToProps = (dispatch: any) => {
    const actions = {
        AdicionarNovoGrupo: (grupo: Grupo) =>
            dispatch(GruposActions.AdicionarErroValidacao(grupo))
    }

    return actions;
}

const conector = connect(mapStateToProps, mapDispatchToProps);
type Propriedades = ConnectedProps<typeof conector>;

class NovoGrupo extends React.PureComponent<Propriedades> {
    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default conector(NovoGrupo);