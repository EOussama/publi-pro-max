window.addEventListener('load', () => {
    document.querySelector('.loadingPanel').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loadingPanel').style.display = 'none';
    }, 500);
    
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target),
        headerHeight = document.getElementsByTagName('header')[1],
        scrollBtn = document.querySelector('.fa-chevron-down'),
        copyrightDate = document.getElementById('copyright-year'),
        btnInicio = document.getElementById('btnInicio'),
        btnJobs = document.getElementById('btnJobs'),
        btnUs = document.getElementById('btnUs'),
        transEn = document.getElementById('langSelectEn'),
        transSp = document.getElementById('langSelectEs'),
        transFr = document.getElementById('langSelectFr');

    // Navbar burger button
    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    // Hero scroll button
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: headerHeight.clientHeight,
            behavior: 'smooth'
        });
    });

    // Contact modal
    document.getElementById('btnContact').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('is-active');
    });

    document.querySelector('.delete').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('is-active');
    });

    // Scroll to top button
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        btnInicio.classList.add('is-active');
        if(btnJobs) btnJobs.classList.remove('is-active');
        if(btnUs) btnUs.classList.remove('is-active');
    });

    // Menu buttons
    btnInicio.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        btnInicio.classList.add('is-active');
        if(btnJobs) btnJobs.classList.remove('is-active');
        if(btnUs) btnUs.classList.remove('is-active');
    });

    if(btnUs) {
        btnUs.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('[data-id="btnUs"]').offsetTop - 50,
                behavior: 'smooth'
            });
    
            btnInicio.classList.remove('is-active');
            btnJobs.classList.remove('is-active');
            btnUs.classList.add('is-active');
        });
    }

    if(btnJobs) {
        btnJobs.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('[data-id="btnJobs"]').offsetTop - 50,
                behavior: 'smooth'
            });
    
            btnInicio.classList.remove('is-active');
            btnJobs.classList.add('is-active');
            btnUs.classList.remove('is-active');   
        });
    }

    // Translations
    transEn.addEventListener('click', () => {
        translate(document.body, dict, 'en');
    });

    transSp.addEventListener('click', () => {
        translate(document.body, dict, 'es');
    });

    transFr.addEventListener('click', () => {
        translate(document.body, dict, 'fr');
    });

    // Dynamic copyright year
    if(((new Date()).getFullYear()) > 2018)
        copyrightDate.textContent = `2018 - ${(new Date()).getFullYear()}`;
    else
        copyrightDate.textContent = 2018;
});

window.addEventListener('scroll', () => {
    if(window.scrollY >= document.getElementsByTagName('header')[1].offsetHeight)
        document.getElementById('scrollTopBtn').style.display = 'block';
    else
        document.getElementById('scrollTopBtn').style.display = 'none';
});