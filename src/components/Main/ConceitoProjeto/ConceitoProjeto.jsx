import React from 'react';
import CardInformacao from '../CardInformacao/CardInformacao';
import Botao from '../Botao/Botao';
import Metricas from '../Metricas/Metricas';
import styles from './ConceitoProjeto.module.css';
import style from '../CardInformacao/CardInformacao.module.css';

function ConceitoProjeto({tipo}) {

    const classeCard = tipo === 'reverse' ? styles.cardRowReverse : styles.cardRow;

    return (
        <section className={styles.conceitoContainer}>
            <div>
                <Metricas titulo="40+" descricao="Universidades envolvidas" />
                <Metricas titulo="60+" descricao="Projetos iniciados" />
                <Metricas titulo="30+" descricao="Infomação relevante" />
            </div>
            <div className={`${style.cardInformacao} ${classeCard} ${styles.conceitoContainer}`}>
                <CardInformacao 
                    imagem=""
                    subtitulo="Conceito do projeto"
                    titulo="O início de tudo"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et odio nec nunc ultricies lacinia. Nulla facilisi. Nullam nec orci id libero aliquet vehicula. Nullam id nunc nec nunc ultricies lacinia. Nulla facilisi. Nullam nec orci id libero aliquet vehicula."/>
                    <Botao conteudo="Conheça +" tipo="degrade" />
            </div>
            <div className={`${style.cardInformacao} ${classeCard}`}>
                <CardInformacao 
                    imagem=""
                    subtitulo="Conceito do projeto"
                    titulo="Entenda melhor"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et odio nec nunc ultricies lacinia. Nulla facilisi. Nullam nec orci id libero aliquet vehicula. Nullam id nunc nec nunc ultricies lacinia. Nulla facilisi. Nullam nec orci id libero aliquet vehicula."/>
                    <Botao conteudo="Saiba mais  ᐳ" tipo="transparente" />
            </div>
        </section>
    );
}

export default ConceitoProjeto;