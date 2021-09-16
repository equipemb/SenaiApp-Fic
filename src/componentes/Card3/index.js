import React from 'react';
import './style.css';
import IMG from "./imagens/nr10r.jpg"
 
function Card3() {
    return(
        <div className="card-container">
            <h3>NR10 - RECICLAGEM </h3>
            <img src={IMG} />
            <h4>SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE</h4>
            <p>
                <strong> Carga Horária: </strong>
                20 Horas
            </p>
            <p>
                <strong> Valor: </strong>
                R$ 170,00
            </p>
        </div>
    );
}
export default Card3;
