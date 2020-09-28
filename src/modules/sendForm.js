const sendForm= () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMesage = 'Загрузка..',
    errorRequired = 'Необходимо подтвердить согласие на обработку данных!';

  const forms = document.querySelectorAll('form'),
  thanks = document.getElementById('thanks'),
  callbackForm = document.getElementById('callback_form'),
  freeVisitForm = document.getElementById('free_visit_form');


  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 4 rem; color: #fff`;

  const validationForms = () => {
    document.body.addEventListener('input', event => {
      let target = event.target;

      if (target.matches('input[type="tel"]')) {
        target.value = target.value.replace(/[^\d+]/g, '');
      }
      if(target.matches('.name_form')) {
        target.value = target.value.replace(/[^А-я\s]/g, '');
      }
    });
  };
  validationForms();

  const createDataSend = (form) => {
    statusMessage.textContent = loadMesage;
    statusMessage.style.cssText = 'color: #fff';

      const formData = new FormData(form);
            let body = {};
            formData.forEach((item, key) => body[key] = item);

            sendData(body)
            .then((response) => {
              if(response.status !== 200) {
                throw new Error('status network in not 200');
              }
              form.reset();
              if(freeVisitForm.style.display !== 'none' || callbackForm.style.display !== 'none') {
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
              }
              thanks.style.display = 'block';
              thanks.addEventListener('click', event => {
                let target = event.target;
      
                if (target.matches('.close_icon')) {
                  thanks.style.display = 'none';
                }
                target = target.closest('.form-wrapper');
                if (!target) {
                  thanks.style.display = 'none';
                }
                if(event.target.matches('.close-btn')){
                  thanks.style.display = 'none';
                }
              });
              statusMessage.textContent = '';
            })
            .catch(error => {
              statusMessage.textContent = errorMessage;
              statusMessage.style.cssText = 'color: #FF0000';
              console.error(error);
            });
  };

  const formSend = (e, form) => {
    e.preventDefault();
    createDataSend(form);
  };

  const validCheck = (form, phoneVal) => {
    phoneVal = form.querySelector('input[type="tel"]');
    form.addEventListener('submit', (e) => {
      let target = e.target;
      phoneVal.addEventListener('input', () =>  phoneVal.style.border = '');
      if((phoneVal.value.slice(0, 1) === '+' && phoneVal.value.length < 7) || phoneVal.value.length < 7) {
        phoneVal.style.border = '2px solid #FF0000';
        form.append(statusMessage);
        statusMessage.textContent = 'Минимальное допустимое количество цифр - 7';
        statusMessage.style.cssText = `color: #FF0000`;
        e.preventDefault();
        return false;
      }
      if(target.matches('#footer_form')){
        if(!form.clubName[0].checked && !form.clubName[1].checked) {
          e.preventDefault();
          form.append(statusMessage);
          statusMessage.textContent = 'Необходимо выбрать клуб!';
          statusMessage.style.cssText = `color: #FF0000`;
          return false;
        } else {
          form.append(statusMessage);
          formSend(e, form);
        }
      }
      if(!form.check.checked) {
        e.preventDefault();
        form.append(statusMessage);
        statusMessage.textContent = errorRequired;
        statusMessage.style.cssText = `color: #FF0000`;
        return false;
      } else {
        form.append(statusMessage);
        formSend(e, form);
      }
    });
  };


  forms.forEach(item => {
    validCheck(item);
  });

  const sendData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;