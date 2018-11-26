$(document).ready(() => {
    const navbar = $('nav#default-menu');

    // #region Dropdowns

    // Initializing the services dropdown.
    $('#services-dropdown').dropdown();
    $('#services-burger-dropdown').dropdown({ direction: 'downward' });

    // Initializing the languages' dropdown.
    $('#languages-dropdown').dropdown();
    $('#languages-burger-dropdown').dropdown({ direction: 'downward' });
    $('#languages-dropdown .menu .item:first-of-type').click();

    // #endregion

    // #region Carousels
    $('#header-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false
    });

    $('#jobs-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        dots: true
    });
    // #endregion

    // #region Burger menu

    $('#burger-menu').sidebar({ transition: 'overlay' });
    $('#burger-menu').sidebar('attach events', 'a#burger-btn');

    // #endregion

    // #region Scroll

    $('i#scroll-down-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('header').outerHeight() + 2
        }, 500);
    });

    $('a#home-btn').on('click', () => {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $('a#home-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $('a#about-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('footer').offset().top
        }, 500);
    });

    $('a#about-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('footer').offset().top
        }, 500);
    });

    let jobsTop = 200;

    $('a#jobs-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#jobs-carousel').offset().top - jobsTop
        }, 500);

        jobsTop = 150;
    });

    $('a#jobs-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#jobs-carousel').offset().top - jobsTop
        }, 500);

        jobsTop = 150;
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop() >= $('header').outerHeight()) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });

    // #endregion

    // #region Scroll reveal

    ScrollReveal().reveal('section#creative', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'bottom'
    });

    ScrollReveal().reveal('section#jobs', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'bottom'
    });

    // #endregion

    // #region Copyright

    const
        currentYear = (new Date()).getFullYear(),
        copyrightYearString = (currentYear > 2018 ? `2018 - ${ currentYear }` : '2018');

    $('span#copyright-year').text(copyrightYearString);

    // #endregion

    // #region Loader

    setTimeout(() => {
        $('div#loader div.loader').removeClass('active');
        $('div#loader').css('display', 'none');

        // Intro animations.
        $('img#logo').animate({
            opacity: 1,
            left: 0
        }, 1000);

        $('h4#slogan').delay(800).animate({
            opacity: 1,
            right: 0
        }, 1000);

        $('i#scroll-down-btn').delay(1200).animate({
            opacity: .3,
            top: 0
        }, 1000, () => {
            $('i#scroll-down-btn').addClass('wiggle');
        });

        $(navbar).delay(2500).animate({
            opacity: 1,
            top: 0
        }, 500, () => {
            $('body').css('overflow-y', 'auto');
        });

        $('nav#burger-btn-menu').delay(2500).animate({
            opacity: 1,
            top: 0
        }, 500, () => {
            $('body').css('overflow-y', 'auto');
        });
    }, 1000);

    // #endregion
});

window.addEventListener('beforeunload', () => {
    window.scrollTo(0,0);
});