export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]')
  const btnFecharModal = document.querySelector('[data-modal="fechar"]')
  const btnAbrirModal = document.querySelector('[data-modal="abrir"]')
  if (containerModal && btnFecharModal && btnAbrirModal) {

    function toggleModal() {
      containerModal.classList.toggle('ativo')
    }

    function clicarForaModal(event) {
      if (event.target === this) {
        toggleModal()
      }
    }
  
    btnAbrirModal.addEventListener('click', toggleModal)
    btnFecharModal.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clicarForaModal)
  }
}