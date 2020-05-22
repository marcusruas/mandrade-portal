import React from 'react';
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import Mensagem from './Mensagem';

const Mensageria = () => {
    return (
        <div className="Mensageria">
            <div className="Mensageria_Controle">
                <Button danger icon={< CloseCircleOutlined />}>Excluir Tudo</Button>
            </div>
            <Mensagem />
        </div>
    )
}

export default Mensageria;