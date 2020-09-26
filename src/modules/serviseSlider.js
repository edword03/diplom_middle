const slideSlider = () => {
  const servicesSlider = document.querySelector('.services-slider'),
  wrapper = document.querySelector('#services > .wrapper'),
  servesSlide = document.querySelectorAll('.services-slider > .slide');
  let width = 225,
  count = 5,
  position = 0;   

  servicesSlider.addEventListener('click', event => {
    let target = event.target;

    if(target.matches('.prev > span, .fa-angle-left')) {
      position += width;
      position = Math.min(position, 0);
      servesSlide[0].style.marginLeft = position + 'px';
    }

    if (target.matches('.next > span, .fa-angle-right')) {
      position -= width;
      Math.max(position, -width * (servesSlide.length ));
      if (position >= -1125) {
        servesSlide[0].style.marginLeft = position + 'px';
      } else if (position <= -1125){
        servesSlide[0].style.marginLeft = `-1125px`;
        position = -1125;
      }
    }
  });
};

export default slideSlider; 