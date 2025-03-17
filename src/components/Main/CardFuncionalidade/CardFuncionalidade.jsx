import React from 'react';
import style from './CardFuncionalidade.module.css';

function CardFuncionalidade(props) {
    return (
        <div className={style.cardFuncionalidade}>
            {/* aqui vai entrar uma imagem/icone que simboliza a funcionalidade (e.g uma lâmpada, um galinheiro, um termometro) */}
            <span></span>
            <h4>{props.titulo}</h4>
            <p>{props.descricao}</p>
        </div>
    );
}

export default CardFuncionalidade;