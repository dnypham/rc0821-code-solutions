var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var values = {};
  values.name = $contactForm.elements.name.value;
  values.email = $contactForm.elements.email.value;
  values.message = $contactForm.elements.message.value;

  console.log('message data:', values);
  $contactForm.reset();
});
