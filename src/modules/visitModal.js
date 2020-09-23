const visitModal = () => {
  const openPopup = document.querySelector('.open-popup'),
  visitForm = document.getElementById('free_visit_form');

  console.log(openPopup);
  openPopup.addEventListener('click', (event) => {
    if (event) {
      visitForm.style.display = 'block';
    }
  });
  visitForm.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.close_icon')) {
      visitForm.style.display = 'none';
    }
    target = target.closest('.form-wrapper');
    if (!target) {
      visitForm.style.display = 'none';
    }
  });
};

export default visitModal;