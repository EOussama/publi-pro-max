window.addEventListener('load', () => {
    const
        __images = document.querySelectorAll('.jobs-gallery .jobs-thumbs img'),
        __focusedPanelJob = document.getElementById('focuedPanelJob');
    var __jobsIndex = 0;

    setInterval(() => {
        __images[__jobsIndex].classList.add('is-active');
        __focusedPanelJob.src = __images[__jobsIndex].src;

        if(__jobsIndex === 0)
            __images[8].classList.remove('is-active');
        else
            __images[__jobsIndex - 1].classList.remove('is-active');
        
        if(__jobsIndex++ >= 8)
            __jobsIndex = 0;
    }, 3000);
});