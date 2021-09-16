import React from 'react';
import './style.css';
import IMG from "./imagens/nr10b.jpg"
 
function Card2() {
    return(
        <div className="card-container">
            <h3>NR10 - BÁSICO </h3>
            <img src={IMG} />
            <h4>SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE</h4>
            <p>
                <strong> Carga Horária: </strong>
                40 Horas
            </p>
            <p>
                <strong> Duração: </strong>
                2 meses
            </p>
            <p>
                <strong> Valor: </strong>
                R$ 340,00
            </p>
        </div>
    );
}
export default Card2;
