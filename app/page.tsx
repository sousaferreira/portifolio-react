import React from "react";
import './globals.css';

export default function Home() {
  return (
    <div className="container">
      {/* Círculos no fundo */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      {/* Perfil com imagem */}
      <div className="perfil">
        <img src="/img/pessoas.png" alt="Foto de perfil" />
        <h1>Seu Nome</h1>
        <p>Desenvolvedor(a) Web</p>
      </div>

      {/* Caixa de conteúdo */}
      <div className="caixa">
        <div className="content">
          <h1>Olá! Seja bem-vindo(a) ao meu portfólio.</h1>
          <p>
            Aqui você vai encontrar os projetos que traduzem minha paixão por programação.
            Cada trabalho representa um desafio superado, uma ideia colocada em prática e
            um passo a mais na minha evolução profissional.
          </p>
        </div>
      </div>
    </div>
  );
}
