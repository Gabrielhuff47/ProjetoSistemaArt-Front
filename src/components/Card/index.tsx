import './Card.scss'
import React from 'react';
   
interface CardProps{
    imagem: string;
    onClick?: () => void;
    titulo: string;
    subtitulo: string;
}
const Card : React.FunctionComponent<CardProps> = ({imagem, onClick, titulo, subtitulo}) =>{
        return(
            <div className="card"  >
            <img src={imagem} onClick={onClick} />
            <p className="titulo">{titulo}</p>
            <p className="texto">{subtitulo}</p>
        </div>

        );
    }

    export default Card;