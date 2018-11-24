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
});