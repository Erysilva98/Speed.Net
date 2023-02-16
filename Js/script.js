// Menu Hamburguer

const menuHamburguer = document.querySelector("#menuHamburguer");
const navegacao = document.querySelector("nav ul");

menuHamburguer.addEventListener("click", function(){
    navegacao.classList.toggle("active");
} );