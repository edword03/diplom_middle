'use strict';
const calculateCost = () => {
  const cardOrder = document.getElementById('card_order'),
    priceTotalValue = document.getElementById('price-total'),
    time = document.querySelectorAll('.time > input'),
    promoCode = document.getElementById('promoCode'),
    mozaikaCheck = document.getElementById('card_leto_mozaika'),
    shelkovoCheck = document.getElementById('card_leto_schelkovo');
  const code = 'ТЕЛО2020';
  
  let discount,
  cost;
  
  const price = {
    schelkovo: {
      m1: 2999,
      m6: 14990,
      m9: 21990,
      m12: 24990,
    },
    mozaika:{
      m1: 1999,
      m6: 9900,
      m9: 13900,
      m12: 19900
    }
  };

  const getPriceClub = (club) => {
    time.forEach(i => {
      if(i.id === 'm1' && i.checked) {
        cost = club.m1;
      }
      if(i.id === 'm2' && i.checked) {
        cost = club.m6;
      }
      if(i.id === 'm3' && i.checked) {
        cost = club.m9;
      }
      if(i.id === 'm4' && i.checked) {
        cost = club.m12;
      }
    });
  };

  const countSum = () => {
    if(mozaikaCheck.checked) {
      getPriceClub(price.mozaika);
    } else {
      getPriceClub(price.schelkovo);
    }
    
    priceTotalValue.textContent = cost;
  };
  
  if(promoCode) {
    promoCode.addEventListener('input', (e) => {
      if (promoCode.value === code) {
        discount = 0.3;
        
        for(let key in price) {
          if (typeof (price[key])=== 'object') {
            for(let i in price[key]) {
              price[key][i] = Math.round(price[key][i] - (price[key][i] * discount));
            }
          }
        }
      }
    });

    cardOrder.addEventListener('change', () => {
      countSum();
    });
  }
};

export default calculateCost;