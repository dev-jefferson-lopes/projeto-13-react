import React from "react";

export default function Header(){
    return(
        <header>
           <div>
            <img src="/public/assets/logo.png" alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">PRODUTOS</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
           </div>
        </header>
    )
}