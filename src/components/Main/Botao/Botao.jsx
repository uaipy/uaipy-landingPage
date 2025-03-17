import React from 'react';
import styles from './Botao.module.css';

function Botao({conteudo, tipo}) {

    const classeBotao = tipo === 'degrade' ? styles.botaoDegrade : styles.botaoTransparente;

    return (
        <a href="#" className={`${styles.botao} ${classeBotao}`}>{conteudo}</a>
    );
}

export default Botao;