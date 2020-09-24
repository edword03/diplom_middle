'use strict';
const slideGallery = () => {
  const slide = document.querySelectorAll('.gallery-slider > .slide'),
  gallerySlider = document.querySelector('.gallery-bg');

  let currentSlide = 0,
  interval;

  const prevSlider = (el, index) => {
    el[index].style.display = 'none';
  };

  const nextSlide = (el, index) => {
    el[index].style.display = 'block';
  };

  const autoPlay = () => {
    prevSlider(slide, currentSlide);
    currentSlide++;
    
    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide);
  };

  const startSlide = (time) => {
    interval = setInterval(autoPlay, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  gallerySlider.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('.prev > span, .fa-angle-left')) {
      prevSlider(slide, currentSlide);
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide);
    }
    if (target.matches('.next > span, .fa-angle-right')) {
      prevSlider(slide, currentSlide);
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
    }
  });

  gallerySlider.addEventListener('mouseover', (event) => {
    if (event.target.matches('slider-arrow, .slider-arrow > span, .fa-angle-left')) {
      stopSlide();
    }
  });

  gallerySlider.addEventListener('mouseout', event => {
    if (event.target.matches('slider-arrow, .slider-arrow > span, .fa-angle-left')) {
      startSlide(3000);
    }
  });

  startSlide(3000);
};

export default slideGallery;