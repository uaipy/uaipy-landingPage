import React from 'react';
import CardInformacao from '../CardInformacao/CardInformacao';
import styles from './NossoTime.module.css';
import style from '../CardInformacao/CardInformacao.module.css';

function NossoTime() {
    return (
        <section className={`${styles.nossoTime} ${style.cardInformacao}`}>
            <CardInformacao 
            imagem="https://placehold.co/200x200"
            subtitulo="Colaboradores e envolvidos"
            titulo="Nosso time"
            texto="Explicar sobre como o projeto é open source e está crescendo cada vez mais. Envolvimento do governo e afins Fusce leo mi, elementum ut elit in, lobortis consectetur tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor."/>
        </section>
    );
}

export default NossoTime;