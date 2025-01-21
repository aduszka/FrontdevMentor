document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    let isValid = true;

    // Sprawdzenie imienia
    if (firstName === '') {
      isValid = false;
      document.querySelector('#first-name + .form-alert').style.display = 'block';
      document.querySelector('#first-name').classList.add('form-error');
    } else {
      document.querySelector('#first-name + .form-alert').style.display = 'none';
      document.querySelector('#first-name').classList.remove('form-error');
    }

    // Sprawdzenie nazwiska
    if (lastName === '') {
      isValid = false;
      document.querySelector('#last-name + .form-alert').style.display = 'block';
      document.querySelector('#last-name').classList.add('form-error');
    } else {
      document.querySelector('#last-name + .form-alert').style.display = 'none';
      document.querySelector('#last-name').classList.remove('form-error');
    }

    // Sprawdzenie e-maila
    if (email === '') {
      isValid = false;
      document.querySelector('#email + .form-alert').style.display = 'block';
      document.querySelector('#email').classList.add('form-error');
    } else {
      document.querySelector('#email + .form-alert').style.display = 'none';
      document.querySelector('#email').classList.remove('form-error');
    }

    // Sprawdzenie typu zapytania
    if (!queryType) {
      isValid = false;
      document.querySelector('#query-type + .form-alert').style.display = 'block';
    } else {
      document.querySelector('#query-type + .form-alert').style.display = 'none';
    }

    // Sprawdzenie wiadomości
    if (message === '') {
      isValid = false;
      document.querySelector('#message + .form-alert').style.display = 'block';
      document.querySelector('#message').classList.add('form-error');
    } else {
      document.querySelector('#message + .form-alert').style.display = 'none';
      document.querySelector('#message').classList.remove('form-error');
    }

    const consentAlert = document.querySelector('.form-item5 .form-alert');

  if (!consent) {
    isValid = false;
    consentAlert.classList.add('form-error');
  } else {
    consentAlert.classList.remove('form-error');
    
  }    
    
    // Jeśli formularz jest poprawny, pokazujemy komunikat o sukcesie
    if (isValid) {
      successMessage.style.display = 'block'; // Pokazuje komunikat o sukcesie
      form.reset(); // Resetuje formularz
    }
  })
})


