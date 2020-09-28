// 'use strict';
const topMenuToggle = () => {
  const selectClub = document.querySelector('.club-select'),
    hiddenMenuHeader = document.getElementById('toggleHeaderMenu');

  selectClub.addEventListener('click', e => {
    let target = e.target;
    
    if(target.matches('p')) {
      if(hiddenMenuHeader.style.display === 'none') {
        hiddenMenuHeader.style.display = 'block';
      } else {
        hiddenMenuHeader.style.display = 'none';
      }
    }
  });

};

export default topMenuToggle;