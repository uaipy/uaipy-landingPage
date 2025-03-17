import React from 'react';
import Botao from '../Botao/Botao';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div>
                <h2>Chamada para o projeto aqui</h2>
                <h1>Seja bem-vindo ao universo UAI.py</h1>
                <p>Saiba mais sobre o nosso projeto, que surgiu a partir da iniciativa “Além do Horizonte” da Receita Federal do Brasil, possibilitando a criação das ideias aqui apresentadas.</p>
                <Botao conteudo="Conheça +" tipo="degrade" />
            </div>
            <img src="https://fcjventurebuilder.com/wp-content/uploads/2024/04/PR_-_Sindinfo-1024x576.png" alt="" />
        </section>
    );
}

export default Hero;