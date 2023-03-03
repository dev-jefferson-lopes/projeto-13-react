import React from "react";
import "./index.scss"

export default function Header(){
    return(
        <header className="top-header">
           <div className="section-container top-header-content">
            <img src="/assets/logo.png" alt="logo" />
            <nav>
                <ul>
                    <li><a href="#produto">PRODUTOS</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </nav>
           </div>
        </header>
    )
}