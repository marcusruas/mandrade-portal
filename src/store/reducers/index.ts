import { combineReducers } from 'redux';
import MensagensReducer from './mensagensReducer';

const reducers = {
    Mensagens: MensagensReducer
}

export default combineReducers(reducers);