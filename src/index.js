'use strict';

import topMenuToggle from './modules/topMenuToggle';
import formsModals from './modules/formsModals';
import sendForm from './modules/sendForm';
import autoPlaySlide from './modules/mainSlider';
import popupMenu from './modules/toggleMenuPopup';
import slideGallery from './modules/photoGallery';
import servesSlide from './modules/serviseSlider';

popupMenu();
//выбрать клуб
topMenuToggle();
//открывает модальное окно при клике на 'Записаться на визит' или "Перезвоните мне"
formsModals();
//слайдер в шапке
autoPlaySlide('.main-slider > .slide');
// autoPlaySlide('.gallery-slider > .slide');
slideGallery();
servesSlide();


sendForm();