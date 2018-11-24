$(document).ready(() => {
    const
        navbar = $('nav'),
        footerTop = $('footer').offset().top,
        headerHeight = navbar.outerHeight() + $('header').outerHeight();

    // #region Dropdowns

    // Initializing the services dropdown.
    $('#services-dropdown').dropdown();

    // Initializing the languages' dropdown.
    $('#languages-dropdown').dropdown();
    $('#languages-dropdown .menu .item:first-of-type').click();

    // #endregion

    // #region Carousel
    $('#header-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false
    });
    // #endregion

    // #region Scroll

    $('i#scroll-down-btn').on('click', () => {
        $('html').animate({
            scrollTop: headerHeight + 2
        }, 500);
    });

    $('a#home-btn').on('click', () => {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $('a#about-btn').on('click', () => {
        $('html').animate({
            scrollTop: footerTop
        }, 500);
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop() >= headerHeight) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });

    // #endregion

    // #region Copyright

    const
        currentYear = (new Date()).getFullYear(),
        copyrightYearString = (currentYear > 2018 ? `2018 - ${ currentYear }` : '2018');

    $('span#copyright-year').text(copyrightYearString);

    // #endregion

    // #region Loader

    $(window).scrollTop(0);

    setTimeout(() => {
        $('div#loader div.loader').removeClass('active');
        $('div#loader').css('display', 'none');
        $('body').css('overflow', 'auto');

        // Intro animations.
        $('img#logo').animate({
            left: 0,
            opacity: 1
        }, 1000);

        $('h4#slogan').delay(800).animate({
            right: 0,
            opacity: 1
        }, 1000);

        $('i#scroll-down-btn').delay(1200).animate({
            top: 0,
            opacity: .4
        }, 1000, () => {
            $('i#scroll-down-btn').addClass('wiggle');
        });
    }, 1000);

    // #endregion
});