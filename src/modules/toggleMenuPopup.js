const popupMenu = () => {
  const menuBtn = document.getElementById('burgerBtn'),
    menuTop = document.querySelector('.top-menu'),
    hiddenMenu = document.querySelector('.popup-menu');
  
  //фиксирует меню-бургер
  window.addEventListener('scroll', () => {
    if (document.documentElement.clientWidth < 768) {
      if (window.pageYOffset > 200) {
        menuTop.style.position = 'fixed';
        menuTop.style.top = 0;
        menuTop.style.left = 0;
        menuTop.style.width = '100%';
      } else if (window.pageYOffset < 200){
        menuTop.style = '';
      }
    } else {
      menuTop.style = '';
    }
  });

  //открытие меню по нажатию на бургер и закрытие
  if (document.documentElement.clientWidth < 768) {
    menuBtn.addEventListener('click', () => {
      hiddenMenu.style.display = 'flex';

      hiddenMenu.addEventListener('click', event => {
        let target = event.target;

        if (target.matches('#closeBtnMenu')) {
          hiddenMenu.style.display = 'none';
        } else {
          target = target.closest('.scroll');
          if(target) {
            hiddenMenu.style.display = 'none';
          }
        }
      });
    });
  }

  
  //скрыть или отобразить стрелку
  const hideArrow = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        totop.style.display = 'block';
      } else {
        totop.style.display = 'none';
      }
    });
  };

  hideArrow();
};

export default popupMenu;