const scriptURL = 'https://script.google.com/macros/s/AKfycbwANTJH1W_iEpnydC3jVwAN3y1l9evu_oU0TWqjRFGfNqbBAFQQJdCxmlFT60H5FWhd/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})