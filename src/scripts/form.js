const form = document.getElementById('contact-form');

form.addEventListener('submit', function handleSubmit(event) {
  setTimeout(() => {
    form.reset();
    document.getElementsByClassName('status-message')[0].classList.remove('u-hidden');
    document.getElementsByClassName('status-message')[0].classList.add('u-flex');
  }, 500)
});