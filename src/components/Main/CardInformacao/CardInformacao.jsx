import React from 'react';

function CardInformacao({imagem, subtitulo, titulo, texto}) {
    return (
        <>
        <img src={imagem} alt="" />
        <div>
            <h3>{subtitulo}</h3>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
        </>
    );
}

export default CardInformacao;