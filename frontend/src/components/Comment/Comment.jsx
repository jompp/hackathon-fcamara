import React from "react";
import "./Comment.css";

export default function Comment(){
    const user = "Fábio"; //variavel com nome do usuário logado
    return (
        <div id="comment-main">
            <h2>Nos ajude a melhorar, conte pra gente o que você achou dessa aula!</h2>
            <div id="comment-body">
                <div id="comment-auth">
                    <p>Você está autenticado como <span>{user}</span></p>
                    <p>|</p>
                    <a href="#">Sair</a>
                </div>
                <div id="comment-message">
                    <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg" alt="" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Seja o primeiro a comentar!"></textarea>
                </div>
                <button>Publicar</button>
            </div>
        </div>
    ); 
}