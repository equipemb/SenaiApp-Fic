import React from 'react';
import './style.css';
import Logo from "./imagens/logo.png";


function Header() {
    return(
        <>
        <header>
            <img class="logo" src={Logo} />
            <strong class="text"> Suíço-Brasileira Paulo Ernesto Tello </strong>
        </header>
        </>
        
    );
    
}

export default Header;