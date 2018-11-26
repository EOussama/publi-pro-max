window.addEventListener('load', () => {
    const
        btnRotulos = document.getElementById('btnRetulos'),
        btnRotulicion = document.getElementById('btnRetulocion'),
        btnLetras = document.getElementById('btnLetras'),
        btnVinilos = document.getElementById('btnVinilos'),
        btnPrev = document.querySelector('.fa.fa-chevron-left'),
        btnNext = document.querySelector('.fa.fa-chevron-right'),
        stackImgs = document.querySelectorAll('section img');

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

    document.querySelectorAll('section img').forEach(__image => {
        __image.addEventListener('click', () => {
            document.querySelector('.images.modal img').src = __image.src;
            document.querySelector('.images.modal').classList.add('is-active');
        });
    });

    document.querySelector('.images.modal .modal-close').addEventListener('click', () => {
        document.querySelector('.images.modal').classList.remove('is-active');
    });

    btnPrev.addEventListener('click', () => {
        for(let i = 0; i < stackImgs.length; i++) {
            if(document.querySelector('.images.modal img').src === stackImgs[i].src && i !== 0) {
                document.querySelector('.images.modal img').src = stackImgs[i - 1].src;
                break;
            }
        }
    });

    btnNext.addEventListener('click', () => {
        for(let i = 0; i < stackImgs.length; i++) {
            if(document.querySelector('.images.modal img').src === stackImgs[i].src && i !== stackImgs.length - 1) {
                document.querySelector('.images.modal img').src = stackImgs[i + 1].src;
                break;
            }
        }
    });
})