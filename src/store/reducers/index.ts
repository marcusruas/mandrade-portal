import { combineReducers } from 'redux';

import { MensagensReducer } from './MensagensReducer';
import UsuarioApiReducers from './Usuarios';

const Reducers = combineReducers({
    Mensagens: MensagensReducer,
    ...UsuarioApiReducers,
});

export type ReducersType = ReturnType<typeof Reducers>;
export { Reducers }