import React from 'react';
import style from './MenuNav.module.css'
import logo from '../../../assets/logo-sem-fundo.webp'

function MenuNav() {
    return (
        <div className={style.navHeaderContainer}>
            <img src={logo} alt="Logo Uai.py" />
            <nav>
                <ul>
                    <li><a href="#">Sobre o projeto</a></li>
                    <li><a href="#">Acesse o repositório</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuNav;