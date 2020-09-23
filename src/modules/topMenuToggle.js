'use strict';
const topMenuToggle = () => {
  const selectClub = document.querySelector('.club-select'),
    hiddenMenuHeader = document.getElementById('toggleHeaderMenu');

    selectClub.addEventListener('click', () => {
    if(!hiddenMenuHeader.style.display || hiddenMenuHeader.style.display === 'none') {
      hiddenMenuHeader.style.display = 'block';
    } else {
      hiddenMenuHeader.style.display = 'none';
    }
    
  });
};

export default topMenuToggle;