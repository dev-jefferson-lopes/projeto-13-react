import React from "react";

export default function SecaoContato(){
    return(
        <section>
           <div>
            <h2>FALE CONOSCO</h2>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div>
                <div>
                    <h3>Contato</h3>
                    <ul>
                        <li><img src="/public/assets/local.png" alt="local" /> Nova Iguaçu, RJ</li>
                        <li><a href="tel:+552199999-9999"> <img src="/public/assets/telefone.png" alt="telefone" /> (21) 99999-9999</a></li>
                        <li><img src="/public/assets/email.png" alt="email" /> contato@oticavida.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Nossas Redes Sociais</h3>
                    <ul>
                        <li><img src="/public/assets/fb.png" alt="Facebook" /> /OticaVida</li>
                        <li><img src="/public/assets/ig.png" alt="Instagram" /> @oticavidarj</li>
                        <li><img src="/public/assets/tt.png" alt="Twitter" /> @oticavidarj</li>
                    </ul>
                </div>
            </div>
           </div>
        </section>
    )
}