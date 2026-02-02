'use strict'/* Ela ajuda a evitar erros comuns, bugs silenciosos e comportamentos inseguros, 
forçando o motor JS a lançar erros em situações como variáveis não declaradas ou modificação 
de objetos imutáveis. */

const botaoTrocarCor = document.getElementById("trocar-cor")

function trocarCor(){
    
    let cor = document.getElementById('cor').value
    if(cor == 'vermelho'){
        cor = 'red'
    }else if( cor == 'verde'){
        cor = "green"
    }else if( cor == 'azul'){
        cor = "blue"
    }else if( cor == 'roxo'){
        cor = "purple"
    }
    document.documentElement.style.setProperty('--cor-bg', cor)


}

botaoTrocarCor.addEventListener("click", trocarCor)

