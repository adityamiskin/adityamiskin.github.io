$('.nav-link').on('click', function () {
	$('.navbar-collapse').collapse('hide');
});

$('.carousel').carousel({
	interval: false,
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

const date = new Date().getFullYear();
$('#date').text(date);

// window.addEventListener('scroll', () => {
//   var nav = document.querySelector('.navbar');
//   nav.classList.toggle('transparent', window.scrollY > 200);
// });

// var form = document.querySelector('.pageclip-form');

// Pageclip.form(form, {
//   onSubmit: function (event) {},
//   onResponse: function (error, response) {
//     setTimeout(function () {
//       $('#exampleModal').modal('show');
//       confetti({
//         zIndex: 2000,
//         particleCount: 100,
//         spread: 160
//       });
//       document.getElementById('contactForm').reset();
//     }, 1000);

//     setTimeout(function () {
//       $('#exampleModal').modal('hide');
//     }, 3000);
//   }
// });
