'use strict';

import "@babel/polyfill";
import 'dom-node-polyfills';
import 'nodelist-foreach-polyfill';
import 'fetch-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import topMenuToggle from './modules/topMenuToggle';
import formsModals from './modules/formsModals';
import sendForm from './modules/sendForm';
import autoPlaySlide from './modules/mainSlider';
import popupMenu from './modules/toggleMenuPopup';
import slideGallery from './modules/photoGallery';
import servesSlide from './modules/serviseSlider';
import cardOrder from './modules/calculator';

//открывает меню при нажатии на гамбургер если разрешение меньше 768
popupMenu();

//выбрать клуб
topMenuToggle();

//открывает модальное окно при клике на 'Записаться на визит' или "Перезвоните мне"
formsModals();

//слайдер в шапке
autoPlaySlide('.main-slider > .slide');

//слайдер галлереи
slideGallery();

//слайдер секции "Наши услуги"
servesSlide();

//расчитывает стоимость с учетом промокода
cardOrder();

//отправка формы ajax, валидация
sendForm();