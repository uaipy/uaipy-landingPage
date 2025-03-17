import React from 'react';
import Hero from './Hero/Hero';
import ConceitoProjeto from './ConceitoProjeto/ConceitoProjeto';
import LinkRepositorio from './LinkRepositorio/LinkRepositorio';
import Eventos from './Eventos/Eventos';
import NossoTime from './NossoTime/NossoTime';
import Funcionalidades from './Funcionalidades/Funcionalidades';

function Main() {
    return (
        <>
            <Hero />
            <ConceitoProjeto />
            <Funcionalidades />
            <NossoTime />
            <LinkRepositorio />
            <Eventos />
        </>
    );
}

export default Main;