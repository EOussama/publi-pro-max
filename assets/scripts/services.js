window.addEventListener('load', () => {
    const
        btnRotulos = document.getElementById('btnRetulos'),
        btnRotulicion = document.getElementById('btnRetulocion'),
        btnLetras = document.getElementById('btnLetras'),
        btnVinilos = document.getElementById('btnVinilos');

    btnRotulos.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('rotulos').offsetTop - 50,
            behavior: 'smooth'
        });
    });

    btnRotulicion.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('rotulacion').offsetTop - 50,
            behavior: 'smooth'
        });
    });

    btnLetras.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('letras').offsetTop - 50,
            behavior: 'smooth'
        });
    });

    btnVinilos.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('vinilos').offsetTop - 50,
            behavior: 'smooth'
        });
    });
})