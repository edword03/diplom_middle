const mainSlider = (selector) => {
  const slide = document.querySelectorAll(selector);

  let currentSlide = 0,
  interval;

  const prevSlider = (elem, i) => {
    elem[i].style.display = 'none';
  };

  const nextSlide = (elem, i) => {
    elem[i].style.display = 'flex';
  };

  const autoPlay = () => {
    prevSlider(slide, currentSlide);
    currentSlide++;
    
    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide);
  };

  const start = () => {
    interval = setInterval(autoPlay, 3000);
  };

  start();
};  

export default mainSlider;