import React from 'react';
import Card from '../Card/';
import './style.css';
import Card2 from '../Card2';
import Card3 from '../Card3';
 
function HomePage() {
    return(
        <>
            <h1> Cursos Formação Inicial e Continuada</h1>
            <h2> Segurança no Trabalho - Saúde e Segurança no Trabalho</h2>
            <div className="home-page">
                <Card />
                <Card2 />
                <Card3 />
            </div>
        </>
    );
}
 
export default HomePage;
