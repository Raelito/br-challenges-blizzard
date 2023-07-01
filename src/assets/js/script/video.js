function playVideo(video) {
  video.classList.remove("hidden"); // Remove a classe de ocultação para exibir o vídeo
  video.play(); // Inicia a reprodução do vídeo
}

function pauseVideo(video) {
  video.pause(); // Pausa a reprodução do vídeo
  video.classList.add("hidden"); // Adiciona a classe de ocultação para esconder o vídeo novamente
}
