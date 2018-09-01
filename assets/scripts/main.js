window.addEventListener('load', () => {
    document.querySelector('.loadingPanel').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loadingPanel').style.display = 'none';
    }, 500);
    
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target);

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});