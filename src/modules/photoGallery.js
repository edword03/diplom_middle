'use strict';
const slideGallery = () => {
  const slide = document.querySelectorAll('.gallery-slider > .slide'),
  dots = document.querySelectorAll('.dot'),
  gallerySlider = document.querySelector('.gallery-bg');

  let currentSlide = 0,
  interval;


  const prevDot = (el, index, strClass) => {
    el[index].classList.remove(strClass);
  };

  const nextDot = (el, index, strClass) => {
    el[index].classList.add(strClass);
  };

  const prevSlider = (el, index) => {
    el[index].style.display = 'none';
  };

  const nextSlide = (el, index) => {
    el[index].style.display = 'block';
  };

  const autoPlay = () => {
    prevDot(dots, currentSlide, 'dot-active');
    prevSlider(slide, currentSlide);
    currentSlide++;
    
    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide);
    nextDot(dots, currentSlide, 'dot-active');
  };

  const startSlide = (time) => {
    interval = setInterval(autoPlay, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const toggleSlide = (index) => {
    for(let i = 0; i < slide.length; i++){
      if (index === i) {
        slide[i].style.display = 'block';
        dots[i].classList.add('dot-active');
      } else {
        slide[i].style.display = 'none';
        dots[i].classList.remove('dot-active');
      }
    }
  };

  gallerySlider.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('.prev > span, .fa-angle-left')) {
      prevSlider(slide, currentSlide);
      prevDot(dots, currentSlide, 'dot-active');
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide);
      nextDot(dots, currentSlide, 'dot-active');
    }
    if (target.matches('.next > span, .fa-angle-right')) {
      prevSlider(slide, currentSlide);
      prevDot(dots, currentSlide, 'dot-active');
      currentSlide++;

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
      nextDot(dots, currentSlide, 'dot-active');
    } else if (target.matches('.dot')) {
      if (currentSlide >= slide.length || currentSlide >= dots.length) {
        currentSlide = 0;
      }
      dots.forEach((item, index) => {
        if(item === target) {
          toggleSlide(index);
          currentSlide = index;
        }
      });
    }
  });

  gallerySlider.addEventListener('mouseover', (event) => {
    if (event.target.matches('slider-arrow, .slider-arrow > span, .fa-angle-left') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

  gallerySlider.addEventListener('mouseout', event => {
    if (event.target.matches('slider-arrow, .slider-arrow > span, .fa-angle-left') || event.target.matches('.dot')) {
      startSlide(3000);
    }
  });

  startSlide(3000);
};

export default slideGallery;