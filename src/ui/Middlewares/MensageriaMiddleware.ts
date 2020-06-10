import { MiddlewareAPI, Dispatch } from 'redux'
import { RetornoApi } from 'Infrastructure/Models/ApiModels/RetornoApi';
import * as MensagensActions from 'Store/Actions/Mensagens/index';
import { adicionarMensagensRecebidasType } from 'Store/Actions/Mensagens/Types';

const MensageriaMiddleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
    if (action.type && action.type !== adicionarMensagensRecebidasType) {
        if (action.payload && action.payload instanceof RetornoApi) {
            store.dispatch(MensagensActions.AdicionarMensagensRecebidas(action.payload));
        }
    }
    return next(action);
};

export default MensageriaMiddleware;