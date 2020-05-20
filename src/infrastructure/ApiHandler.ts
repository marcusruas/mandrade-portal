import { AxiosPromise } from "axios";
import { toast } from 'react-toastify';

import RetornoErroApi from './models/ApiModels/RetornoErroApi';

const GerenciarRequisicao = async (apiCall: AxiosPromise) => {
    try {
        await apiCall;
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

        if (retorno.PossuiMensagens()) {
            retorno.Mensagens.forEach(msg => {
                if (msg.tipo === 4) {
                    toast.info(msg.texto);
                }
            })
        }

        return retorno;
    }

}

export default GerenciarRequisicao;