$(function() {
    //настройка слайдера "slick-slider"
    $('.slider__photos').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt=""></button>',
    });

    //удаление классов, которые отвечают за активное меню
    let closeMenu = function() {
        $('.header__open-menu').removeClass('active');
        $('.header').removeClass('header-adaptive');
        $('.header__container').removeClass('header-adaptive__container');
        $('.header__logo').removeClass('header-adaptive__logo');
        $('.header__menu').removeClass('header-adaptive__menu');
        $('.header__menu--items').removeClass('header-adaptive__menu--items');
        $('.header__menu--item').removeClass('header-adaptive__menu--item');
        $('.header__signIn').removeClass('header-adaptive__signIn');
        $('.header__open-menu').removeClass('header-adaptive__open-menu');
    }

    //открытие и закрытие меню через кнопку меню
    let openMenu = function() {
        $('.header__open-menu').toggleClass('active');
        $('.header').toggleClass('header-adaptive');
        $('.header__container').toggleClass('header-adaptive__container');
        $('.header__logo').toggleClass('header-adaptive__logo');
        $('.header__menu').toggleClass('header-adaptive__menu');
        $('.header__menu--items').toggleClass('header-adaptive__menu--items');
        $('.header__menu--item').toggleClass('header-adaptive__menu--item');
        $('.header__signIn').toggleClass('header-adaptive__signIn');
        $('.header__open-menu').toggleClass('header-adaptive__open-menu');
    };

    //событие кнопки меню
    $('.header__open-menu').click(openMenu);
    //событие при нажатие на ссылку
    $('.header__menu--item').click(closeMenu);

});