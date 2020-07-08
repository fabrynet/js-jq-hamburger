// $('.header-right > a').click(
//   function () {
//     $('.hamburger-menu').fadeIn(800);
//   }
// );
// $('.close').click(
//   function () {
//     $('.hamburger-menu').fadeOut(800);
//   }
// );
$('.header-right > a').click(
  function () {
    $('.hamburger-menu').addClass('active');
  }
);
$('.close').click(
  function () {
    $('.hamburger-menu').removeClass('active');
  }
);
