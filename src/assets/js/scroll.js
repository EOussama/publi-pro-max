$(document).ready(() => {
    const
        navbar = $('nav#default-menu'),
        josbDef = 150,
        servDef = 150;
    let
        jobsTop = 200,
        servTop = 350;

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

    $('a#jobs-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#jobs-carousel').offset().top - jobsTop
        }, 500);

        jobsTop = josbDef;
    });

    $('a#jobs-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#jobs-carousel').offset().top - jobsTop
        }, 500);

        jobsTop = josbDef;
    });

    $('a#luminos-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-rotulos').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#luminos-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-rotulos').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#retulos-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-rotulacion').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#retulos-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-rotulacion').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#letras-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-letras').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#letras-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-letras').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#vinilos-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-vinilos').offset().top - servTop
        }, 500);

        servTop = 150;
    });

    $('a#vinilos-burger-btn').on('click', () => {
        $('html').animate({
            scrollTop: $('#service-vinilos').offset().top - servTop
        }, 500);

        servTop = 150;
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
        origin: 'bottom',
        afterReveal: () => {
            jobsTop = josbDef;
        }
    });

    ScrollReveal().reveal('section#services', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'bottom',
        afterReveal: () => {
            servTop = servDef;
        }
    });

    ScrollReveal().reveal('div#service-rotulos', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'left',
        afterReveal: () => {
            servTop = servDef;
        }
    });

    ScrollReveal().reveal('div#service-rotulacion', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'left',
        afterReveal: () => {
            servTop = servDef;
        }
    });

    ScrollReveal().reveal('div#service-letras', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'left',
        afterReveal: () => {
            servTop = servDef;
        }
    });

    ScrollReveal().reveal('div#service-vinilos', {
        delay: 200,
        distance: '10%',
        duration: 1000,
        origin: 'left',
        afterReveal: () => {
            servTop = servDef;
        }
    });

    // #endregion    
});

window.addEventListener('beforeunload', () => {
    window.scrollTo(0,0);
});