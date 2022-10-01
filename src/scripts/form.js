const form = document.getElementById('contact-form');

form.addEventListener('submit', function handleSubmit(event) {
  setTimeout(() => {
    form.reset();
  }, 500)
});