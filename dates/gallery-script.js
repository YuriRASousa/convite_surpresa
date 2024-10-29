// Função para abrir o modal e exibir a imagem ou vídeo correspondente
function openModal(src, caption, isVideo = false) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const modalCaption = document.getElementById("modal-caption");
  
    // Limpa as fontes de mídia anteriores
    modalImg.style.display = "none";
    modalVideo.style.display = "none";
  
    // Verifica se é um vídeo ou imagem
    if (isVideo) {
      modalVideo.src = src;
      modalVideo.style.display = "block";
      modalVideo.play();
    } else {
      modalImg.src = src;
      modalImg.style.display = "block";
    }
  
    modalCaption.textContent = caption;
    modal.style.display = "flex";
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById("modal");
    const modalVideo = document.getElementById("modal-video");
  
    // Pausa o vídeo ao fechar o modal
    modalVideo.pause();
    modal.style.display = "none";
  }
  