const maisa = document.querySelector('img');
const menu = document.querySelector('.menu');
const roleta1 = document.querySelector('main img');

function abrirMenu(){
    menu.classList.toggle('ativo');
}

function rodaRoda(){
    roleta1.classList.toggle('roda');
}

maisa.onclick = abrirMenu;
roleta1.onclick = rodaRoda;

