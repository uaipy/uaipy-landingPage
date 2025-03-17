import React from 'react';
import styles from './Contatos.module.css';
import logoWpp from '../../../assets/logo-wpp.svg';
import logoEmail from '../../../assets/logo-email.svg';

function Contatos() {
    return (
        <>
            <p className={styles.tituloContatos}>Entre em contato conosco</p>
            <address>
                <a href="">
                    <img src={logoWpp} alt="" />
                    <p>(34) 9 9999-9999</p>
                </a>
                <a href="">
                    <img src={logoEmail} alt="" />
                    <p>uai.py@email.com</p>
                </a>
            </address>
        </>
    );
}

export default Contatos;