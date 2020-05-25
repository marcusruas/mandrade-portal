import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { AxiosPromise } from "axios";
import { toast } from 'react-toastify';

import RetornoErroApi from 'infrastructure/models/ApiModels/RetornoErroApi';
import RetornoSucessoApi from './models/ApiModels/RetornoSucessoApi';

const GerenciarRequisicao = async (apiCall: AxiosPromise) => {
    try {
        const retorno = await apiCall;
        if (!retorno.data) {
            toast.error('Não foi possível validar as informações passadas. Tente novamente mais tarde');
            return null;
        }

        return new RetornoSucessoApi(
            retorno.data.sucesso,
            retorno.data.dados,
            retorno.data.mensagens
        );
    } catch (error) {
        if (!error.response) {
            toast.error('Falha ao processar solicitação. Favor entrar em contato com suporte');
            console.log('Não foi possível se conectar com a API para realizar a requisição.');
            return;
        }

        const respostaErro = error.response.data;
        const retorno = new RetornoErroApi(
            respostaErro.dados.codigoRetorno,
            respostaErro.dados.mensagemPadrao,
            respostaErro.dados.descricaoErro,
            respostaErro.mensagens
        );

        if (retorno.CodigoRetorno === 7010 || retorno.CodigoRetorno === 7050) { //Regra de negócio ou informação geral
            toast.error(retorno.DescricaoErro);
        } else {
            toast.error(retorno.MensagemPadrao);
            console.log(retorno);
        }

        return retorno;
    }

}

export default GerenciarRequisicao;