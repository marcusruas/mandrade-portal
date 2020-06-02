import { AxiosResponse } from "axios";
import { toast } from 'react-toastify';

import * as RetornoApi from 'Infrastructure/Models/ApiModels/RetornoApi';

const FormatarRequisicao = async (requisicao: Promise<AxiosResponse<any>>): Promise<RetornoApi.RetornoApi> => {
    try {
        const retorno = await requisicao;

        if (!retorno.data) {
            toast.error(RetornoApi.ErroPadraoRequisicao.MensagemPadrao);
            console.log('Retorno: ', retorno);
            return RetornoApi.ErroPadraoRequisicao;
        }

        return new RetornoApi.RetornoSucesso(
            retorno.data.dados,
            retorno.data.mensagens
        );
    } catch (error) {
        if (!error.response) {
            toast.error(RetornoApi.ErroPadraoRequisicao.MensagemPadrao);
            console.log('Erro de requisição: ', RetornoApi.ErroPadraoRequisicao.DescricaoErro);
            return RetornoApi.ErroPadraoRequisicao;
        }

        const respostaErro = error.response.data;
        const retorno = new RetornoApi.RetornoErro(
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

export default FormatarRequisicao;