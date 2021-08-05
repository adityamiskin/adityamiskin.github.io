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

var form = document.querySelector('.pageclip-form');

Pageclip.form(form, {
  onSubmit: function (event) {},
  onResponse: function (error, response) {},
  successTemplate: '<span>Works!!!</span>'
});

// const contactName = $('#contactName');
// const contactEmail = $('#contactEmail');
// const contactSubject = $('#contactSubject');
// const contactMessage = $('#contactMessage');

// var data = {
//   name: contactName,
//   email: contactEmail,
//   subject: contactSubject,
//   message: contactMessage
// };

// Pageclip.send(
//   'api_3wQ69yM1RPPLtCchAaSzaCU5P7OV9hKg',
//   'contactForm',
//   data,
//   function (error, response) {
//     console.log('saved?', !!error, '; response:', error || response);
//   }
// );
