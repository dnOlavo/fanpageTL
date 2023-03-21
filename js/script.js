/*

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

OBJETIVO 1
    - passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2: dar um jeito de identificar quando o usuário clicar no botão
    - passo 3: dar um jeito de pegar o elemento da modal no js
    - passo 4: abrir a modal na tela

OBJETIVO 2
    - passo 1: dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2: dar um jeito de identificar quando o usuário clicar no X
    - passo 3: fechar a modal

*/
//OBJETIVO 1
// - passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o js
const buttonVideopart = document.querySelector(".button-videopart");
//OBJETIVO 2
//- passo 1: dar um jeito de pegar o elemento de fechar modal usando o js
const buttonCloseModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
// - passo 3: dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// - passo 2: dar um jeito de identificar quando o usuário clicar no botão
buttonVideopart.addEventListener("click", () => {
    // // - passo 4: abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

//- passo 2: dar um jeito de identificar quando o usuário clicar no X
buttonCloseModal.addEventListener("click", () => {
    //- passo 3: fechar a modal
    alternarModal();
    video.setAttribute("src", "");
});