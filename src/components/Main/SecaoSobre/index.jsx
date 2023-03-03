import React from "react";
import "./index.scss"

export default function SecaoSobre() {
    return (
        <section id="sobre" className="secao-sobre">
            <div className="section-container">
                <h2 className="sub-title">QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="boxs-cards">
                    <img src="/assets/loja.png" alt="loja" />
                    <div className="card-text">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-text">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="/assets/atendimento.png" alt="atendimento" />
                </div>
            </div>
        </section>
    )
}