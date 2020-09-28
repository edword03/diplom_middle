// 'use strict';
const showModal = () => {
  const gif = document.querySelector('.fixed-gift'),
  giftModal = document.getElementById('gift'),
  callbackForm = document.getElementById('callback_form'),
  callbackVal = callbackForm.querySelectorAll('input'),
  visitForm = document.getElementById('free_visit_form'),
  header = document.querySelector('.head-main');


  const openModal = (el) => {
    let inputs = el.querySelectorAll('input');
    el.style.display = 'block';

    el.addEventListener('click', (event) => {
      let target = event.target;
      el.style.display = 'block';

      if (target.matches('.close_icon')) {
        el.style.display = 'none';
        inputs.forEach(i => {
          i.value = '';
          if(i.checked) {
            i.checked = false;
          }
        });
      }
      target = target.closest('.form-wrapper');
      if (!target) {
        el.style.display = 'none';
        inputs.forEach(i => {
          i.value = '';
          if(i.checked) {
            i.checked = false;
          }
        });
      }
      if(event.target.matches('.close-btn')){
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
    gif.addEventListener('click', () => {
      openModal(giftModal);
      gif.style.display = 'none';
    });
  }

};

export default showModal;