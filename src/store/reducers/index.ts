import { combineReducers } from 'redux';
import { MensagensReducer } from './mensagensReducer';

const Reducers = combineReducers({
    Mensagens: MensagensReducer
})

export type ReducersType = ReturnType<typeof Reducers>;
export { Reducers }