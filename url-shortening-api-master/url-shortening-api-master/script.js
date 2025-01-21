const urlInput = document.getElementById('url-input');
const errorMessageEl = document.getElementById('error-message');
const activateBtn = document.getElementById('activate-btn');
const linkHistoryEl = document.getElementById('links-history');

// Funkcja do pobierania wartości z inputa, który zawiera URL
function getUrlInput(){
  return urlInput.value.trim().toLowerCase();
}

// Funkcja do skracania URL przy pomocy Clean URI API
async function shortenUrl(urlLink) {
  const apiUrl = `https://cleanuri.com/api/v1/shorten`; // API URL do skracania
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'url': urlLink,
    })
  });

  // Sprawdzamy czy odpowiedź jest OK i wyświetlamy link
  if (res.ok) {
    const data = await res.json();
    displayToLinksHistory(urlLink, data);
  } else {
    console.error(`Error shortening URL: ${res.statusText}`);
  }
}

// Funkcja do walidacji URL
function isValidUrl(url){
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

// Funkcja do wyświetlania wyników w historii skróconych linków
function displayToLinksHistory(originalLink, urlData){
  const linkItem = document.createElement('div');
  linkItem.classList.add('item');
  linkItem.innerHTML = `
    <p class='link'>${originalLink}</p>
    <hr>
    <div class='short-link'>
      <p>${urlData.result_url}</p>
      <button class='copy-link-btn'>Copy</button>
    </div>
  `;
  linkHistoryEl.appendChild(linkItem);

  // Kopiowanie linku do schowka
  linkItem.querySelector('.copy-link-btn').addEventListener('click', (e) => {
    let copyUrl = urlData.result_url;
    navigator.clipboard.writeText(copyUrl);
    e.target.style.backgroundColor = 'var(--dark-violet)';
    e.target.textContent = 'Copied!';
    setTimeout(() => {
      e.target.style.backgroundColor = 'var(--cyan)';
      e.target.textContent = 'Copy';
    }, 1500);
  });
}

// Funkcja, która zostanie wywołana po kliknięciu przycisku 'Shorten It!'
activateBtn.addEventListener('click', () => {
  const userURL = getUrlInput();
  
  // Sprawdzamy, czy URL jest poprawny
  if (!userURL || !isValidUrl(userURL)) {
    errorMessageEl.classList.add('error');
    urlInput.classList.add('error');
  } else {
    errorMessageEl.classList.remove('error');
    urlInput.classList.remove('error');
    urlInput.value = ''; // Czyścimy pole
    linkHistoryEl.classList.add('active');
    shortenUrl(userURL); // Skracamy URL
  }
});
async function shortenUrl(urlLink) {
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten`;
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'url': urlLink,
    })
  });

  if (res.ok) {
    const data = await res.json();
    displayToLinksHistory(urlLink, data);
  } else {
    console.error(`Error shortening URL: ${res.statusText}`);
  }
}
