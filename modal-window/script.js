'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnAbrirModal = document.querySelector('.show-modal');
const btnFecharModal = document.querySelector('.close-modal');

// Outra opção:
// btnAbrirModal.addEventListener('click', () => {
//     overlay.classList.remove('hidden');
//     modal.classList.remove('hidden');
// });

// Definição das variáveis com as funções
const fecharModal = function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

const abrirModal = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

btnAbrirModal.addEventListener('click', abrirModal);

btnFecharModal.addEventListener('click', fecharModal);
overlay.addEventListener('click', fecharModal);

// Keyboard events are global - keydown, keyup, keypress
document.addEventListener('keydown', (event) =>{

    // Se teclar Esc
    if (event.key === 'Escape')
        // E não tiver a classe hiden
        if (!modal.classList.contains('hidden'))
            fecharModal();
});