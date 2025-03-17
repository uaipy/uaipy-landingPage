import React from 'react';
import ResumoProjeto from './ResumoProjeto/ResumoProjeto';
import Contatos from './Contatos/Contatos';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <ResumoProjeto />
                <Contatos />
            </div>
            <p>Copyright ©2024 UAI.py. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;