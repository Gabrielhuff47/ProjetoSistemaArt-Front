import React from 'react';
import './Botao.scss';
import Flecha from '../../assets/imagens/FlechaBranca.png';

const Botao = () => {
        return(
            <button className="BotaoEntrar">
                Entrar
                <img src={Flecha}/>
            </button>
        );
}

export default Botao;