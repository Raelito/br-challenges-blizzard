const modal = document.querySelector('.js-modalLogin');
const modalContainer = document.querySelector('.js-modalContainer');
const openModal = document.querySelector('.js-openModal');
const closeModal = document.querySelector('.js-closeModal');

//Função para abrir o modal
openModal.addEventListener('click', () => {
    modalContainer.classList.add("js-open");
})

//Função para fechar o modal
closeModal.addEventListener('click', () => {
  modalContainer.classList.add("js-close"); 
 setTimeout(() => {
    modalContainer.classList.remove('js-open', 'js-close');
  }, 500);
})

//Função para fechar o modal caso o clique ocorra fora do modal
window.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.add('js-close'); 
    setTimeout(() => {
      modalContainer.classList.remove('js-open', 'js-close');
    }, 500);
  }
});
