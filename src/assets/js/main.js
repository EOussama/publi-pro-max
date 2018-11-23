$(document).ready(() => {
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
            scrollTop: ($('nav').outerHeight() + $('header').outerHeight() + 2)
        }, 500);
    });

    // #endregion
});