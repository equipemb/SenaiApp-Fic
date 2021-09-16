import React from 'react';
import './style.css';
import IMG from "./imagens/snt.jpg"

function Card() {
    return(
        <div className="card-container">
            <h3>SEGURANÇA NO TRABALHO</h3>
            <img src={IMG} />
            <h4>COMPETÊNCIA TRANSVERSAL</h4>
            <p>
                <strong> Carga Horária: </strong>
                14 Horas
            </p>
            <p>
                <strong> Duração: </strong>
                21 dias a partir da data de inscrição
            </p>
            <p>
                <strong> Valor: </strong>
                Gratuito
            </p>
        </div>
    );
}
export default Card;
