$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu, .blur').toggleClass('active');
        $('body').toggleClass('lock')
    });
    $('.header__link').click(function (event) {
        $('.header__burger, .header__menu, .blur').removeClass('active');
        $('body').removeClass('lock')
    });
});