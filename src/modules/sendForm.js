const sendForm= () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMesage = 'Загрузка..',
    errorRequired = 'Необходимо подтвердить согласие на обработку данных!';

  const forms = document.querySelectorAll('form'),
  thanks = document.getElementById('thanks'),
  callbackForm = document.getElementById('callback_form'),
  freeVisitForm = document.getElementById('free_visit_form'),
  inputsCheck = document.querySelectorAll('input[type="checkbox"]');


  const statusMessage = document.createElement('div'),
    errorMessageRequire = document.createElement('div');

  statusMessage.style.cssText = `font-size: 4 rem; color: #fff`;
  errorMessageRequire.style.cssText = `font-size: 16px; color: #FF0000`;
  errorMessageRequire.textContent = errorRequired;

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
            form.append(statusMessage);

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
            })
            .catch(error => {
              statusMessage.textContent = errorMessage;
              console.error(error);
            });
  };

  const checkInput = (form, i) => {
    if(inputsCheck[i].checked === true) { 
      createDataSend(form);
     } else {
       statusMessage.textContent = errorRequired;
       statusMessage.style.cssText = `font-size: 16px; color: #FF0000`;
       form.append(statusMessage);
     }
  }

  const formSend = (e, form) => {
    let target = e.target;
    e.preventDefault();
    if(!target.matches('#footer_form')) {
      for(let i = 0; i < inputsCheck.length; i++) {
        if(i === 0) {
          checkInput(form, 0);
        } else if(i === 1) {
          checkInput(form, 1);
        } else if(i === 2) {
          checkInput(form, 0);
        } else if(i === 3) {
          checkInput(form, 3);
        }
      }
    } else {
      createDataSend(form);
    }

  };

  forms.forEach(item => {
    item.addEventListener('submit', e => formSend(e, item));
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