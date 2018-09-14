window.addEventListener('load', () => {
    document.querySelector('.loadingPanel').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loadingPanel').style.display = 'none';
    }, 500);
    
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target),
        headerHeight = document.getElementsByTagName('header')[0],
        scrollBtn = document.querySelector('.fa-chevron-down'),
        copyrightDate = document.getElementById('copyright-year');

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: headerHeight.clientHeight,
            behavior: 'smooth'
        });
    });

    document.getElementById('btnUs').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('[data-id="btnUs"]').offsetTop - 50,
            behavior: 'smooth'
        });
    });

    document.getElementById('btnContact').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('is-active');
    });

    document.querySelector('.delete').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('is-active');
    });

    if(((new Date()).getFullYear()) > 2018)
        copyrightDate.textContent = `2018 - ${(new Date()).getFullYear()}`;
    else
        copyrightDate.textContent = 2018;
});