var modal = document.querySelector('.modal');
var openModalBtn  = document.querySelector('.button__modal__btn');
var iconCloseModal = document.querySelector('.modal__header');
var buttonCloseModal = document.querySelector('.modal__footer');

function toggleModal() {
    modal.classList.toggle("hide");
  }
  
  openModalBtn.addEventListener("click", toggleModal);
  iconCloseModal.addEventListener("click", toggleModal);
  buttonCloseModal.addEventListener("click", toggleModal);
  
  modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });