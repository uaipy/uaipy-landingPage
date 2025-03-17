import React from 'react';
import Botao from '../Botao/Botao';
import styles from './LinkRepositorio.module.css';

function LinkRepositorio() {
    return (
        <section className={styles.linkRepositorio}>
            <div>
                <div>
                    <h3>Ficou interessado e deseja se aprofundar mais no projeto?</h3>
                    <p>Clique para ser redirecionado ao repositório</p>
                </div>
                <Botao conteudo="Conheça +" tipo="degrade" />
            </div>
        </section>
    );
}

export default LinkRepositorio;