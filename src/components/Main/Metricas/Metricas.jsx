import React from 'react';
import styles from './Metricas.module.css';

function Metricas({titulo, descricao}) {
    return (
        <div className={styles.metricas}>
            <dt>{titulo}</dt>
            <dd>{descricao}</dd>
        </div>
    );
}

export default Metricas;