import React from 'react';
import CardFuncionalidade from '../CardFuncionalidade/CardFuncionalidade';
import style from './Funcionalidades.module.css';

function Funcionalidades() {
    return (
        <section className={style.funcionalidadeContainer}>
            <div>
                <h3>Funcionalidades</h3>
                <h2>Possíveis aplicações da Uai.py</h2>
                <p>Aqui deixamos alguns exemplos de usabilidade da UAI.py, desde o monitoramento da umidade do solo em fazendas até o controle de eletrodomésticos inteligentes em um apartamento, tudo a partir do mesmo app.</p>
                <CardFuncionalidade titulo="Monitoramento de umidade do solo" descricao="A Uai.py pode ser utilizada para monitorar a umidade do solo em fazendas, auxiliando o produtor a saber quando e quanto regar." />
                <CardFuncionalidade titulo="Controle de eletrodomésticos" descricao="A Uai.py pode ser utilizada para controlar eletrodomésticos inteligentes em um apartamento, como lâmpadas, ar-condicionado e televisão." />
                <CardFuncionalidade titulo="Monitoramento de temperatura" descricao="A Uai.py pode ser utilizada para monitorar a temperatura de um ambiente, auxiliando a manter o ambiente em uma temperatura ideal para qualquer finalidade do usuário." />
            </div>
        </section>
    );
}

export default Funcionalidades;