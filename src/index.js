'use strict';

import topMenuToggle from './modules/topMenuToggle';
import formsModals from './modules/formsModals';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import popupMenu from './modules/toggleMenuPopup';

popupMenu();
//выбрать клуб
topMenuToggle();
//открывает модальное окно при клике на 'Записаться на визит' или "Перезвоните мне"
formsModals();
//слайдер в шапке
mainSlider();


sendForm();