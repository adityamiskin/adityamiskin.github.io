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

(function ($) {
  'use strict';

  var ssContactForm = function () {
    /* local validation */
    $('#contactForm').validate({
      /* submit via ajax */
      submitHandler: function (form) {
        $.ajax({
          type: 'POST',
          url: 'inc/sendEmail.php',
          data: $(form).serialize(),
          success: function (msg) {
            // Message was sent
            if (msg == 'OK') {
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
            // There was an error
            else {
              document.getElementById('face').innerText = '☹️';

              document.getElementById('exampleModalLabel').innerText =
                'There was some issue sending your message.';

              $('#exampleModal').modal('show');

              setTimeout(function () {
                $('#exampleModal').modal('hide');
              }, 2000);
            }
          },
          error: function () {
            document.getElementById('face').innerText = '☹️';

            document.getElementById('exampleModalLabel').innerText =
              'There was some issue sending your message.';

            $('#exampleModal').modal('show');

            setTimeout(function () {
              $('#exampleModal').modal('hide');
            }, 2000);
          }
        });
      }
    });
  };

  (function ssInit() {
    ssContactForm();
  })();
})(jQuery);
