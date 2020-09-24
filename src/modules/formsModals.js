'use strict';
const showModal = () => {
  const gif = document.querySelector('.fixed-gift'),
  giftModal = document.getElementById('gift'),
  callbackForm = document.getElementById('callback_form'),
  visitForm = document.getElementById('free_visit_form'),
  header = document.querySelector('.head-main');

  const openModal = (el) => {
    el.style.display = 'block';

    el.addEventListener('click', (event) => {
      let target = event.target;
      el.style.display = 'block';

      if (target.matches('.close_icon')) {
        el.style.display = 'none';
      }
      target = target.closest('.form-wrapper');
      if (!target) {
        el.style.display = 'none';
      }
    });
  };

  header.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.open-popup')) {
      openModal(visitForm);
    }
    if (target.matches('#callbackBtn')) {
      openModal(callbackForm);
    }
  }); 

  if(gif) {
    gif.addEventListener('click', (event) => {
      if(event.target.matches('.close-btn')){
        giftModal.style.display = 'none';
      }
      gif.style.display = 'none';
      openModal(giftModal);
    });
  }

};

export default showModal;