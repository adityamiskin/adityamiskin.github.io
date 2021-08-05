$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

$('.carousel').carousel({
  interval: false
});

// AOS.init();
const scrollToTopButton = document.getElementById('floating-btn');

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 100) {
    scrollToTopButton.className = 'show';
  } else {
    scrollToTopButton.className = 'hide';
  }
};

window.addEventListener('scroll', scrollFunc);

// var form = document.querySelector('.pageclip-form');

// Pageclip.form(form, {
//   onSubmit: function (event) {},
//   onResponse: function (error, response) {},
//   successTemplate: '<span>Works!!!</span>'
// });

const contactName = $('#contactName');
const contactEmail = $('#contactEmail');
const contactSubject = $('#contactSubject');
const contactMessage = $('#contactMessage');

const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  var data = {
    contactName: contactName.value,
    contactEmail: contactEmail.value,
    contactSubject: contactSubject.value,
    contactMessage: contactMessage.value
  };

  Pageclip.send(
    'api_3wQ69yM1RPPLtCchAaSzaCU5P7OV9hKg',
    'contactForm',
    data,
    function (error, response) {
      setTimeout(function () {
        $('#exampleModal').modal('show');
        confetti({
          zIndex: 2000,
          particleCount: 100,
          spread: 160
        });
        document.getElementById('contactForm').reset();
      }, 1000);

      setTimeout(function () {
        $('#exampleModal').modal('hide');
      }, 3000);
    }
  );
});
