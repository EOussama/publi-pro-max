$(document).ready(() => {
    const navbar = $('nav#default-menu');

    // #region Dropdowns

    // Initializing the services dropdown.
    $('#services-dropdown').dropdown({ action: 'hide' });
    $('#services-burger-dropdown').dropdown({ direction: 'downward', action: 'hide' });

    // Initializing the languages' dropdown.
    $('#languages-dropdown').dropdown({
        onChange: (value) => {
            translate(document.body, dict, value);
        }
    });
    $('#languages-burger-dropdown').dropdown({
            direction: 'downward',
            onChange: (value) => {
                translate(document.body, dict, value);
            }
        });
    $('#languages-dropdown .menu .item:first-of-type').click();
    $('#languages-burger-dropdown .menu .item:first-of-type').click();

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

    $('#service-rotulos div.service-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true
    });

    $('#service-rotulacion div.service-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true
    });

    $('#service-vinilos div.service-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true
    });
    // #endregion

    // #region Burger menu

    $('#burger-menu').sidebar({ transition: 'overlay' });
    $('#burger-menu').sidebar('attach events', 'a#burger-btn');

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