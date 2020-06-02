import { createAsyncAction } from 'redux-promise-middleware-actions';
import { RetornoApi } from 'Infrastructure/Models/ApiModels/RetornoApi';

const CriarActionChamadaAPIAsync = (type: string, payload: (...args: any) => Promise<RetornoApi>) => {
    return createAsyncAction(
        type,
        payload
    );
}

export { CriarActionChamadaAPIAsync }