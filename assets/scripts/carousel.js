window.addEventListener('load', () => {
    const carousel = document.getElementById('carousel');
    var index = 1;

    setInterval(() => {
        if(index >= 4) {
            index = 1;
            carousel.style.top = '0';
        } else
            carousel.style.top = `-${window.innerHeight * index++}px`;
    }, 5000);
});

