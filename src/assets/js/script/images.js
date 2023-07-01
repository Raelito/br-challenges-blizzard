
//Função para adicionar o tamanho de imagem na tag HTML <img width="100px" height="100px">
function setDimensions() {
  const images = document.getElementsByTagName('img');

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const img = new Image();


    img.src = image.src;


    img.onload = function () {

      image.width = this.width;
      image.height = this.height;
    }
  }
}

//Função para adicionar aria-hidden="true" nos arquivos de icone
function showIcons() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.setAttribute('aria-hidden', 'true');
  });
}

//Evento para executar as funções no carregar do HTML
window.addEventListener('load', setDimensions);
window.addEventListener('load', showIcons);