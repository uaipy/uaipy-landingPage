import React from 'react';
import logo from '../../../assets/logo-sem-fundo.webp';
import styles from './ResumoProjeto.module.css';

function ResumoProjeto() {
    return (
        <>
            <img src={logo} className={styles.imgResumo} alt="" />
            <p className={styles.textoResumo}>Falar um pouquinho mais do projeto rapidinho só pra ficar daora o rodapé e tals, podemos puxar mais pro pessoal aqui eu acho, motivações e afins :)</p>
        </>
    );
}

export default ResumoProjeto;