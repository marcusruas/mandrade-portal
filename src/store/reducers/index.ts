import { combineReducers } from 'redux';
import { MensagensReducer } from './MensagensReducer';
import { UsuariosReducer } from './UsuariosReducer';

const Reducers = combineReducers({
    Mensagens: MensagensReducer,
    Usuarios: UsuariosReducer,
});

export type ReducersType = ReturnType<typeof Reducers>;
export { Reducers }