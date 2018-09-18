window.addEventListener('load', () => {
    const
        __images = document.querySelectorAll('.jobs-gallery .jobs-thumbs img'),
        __focusedPanelJob = document.getElementById('focuedPanelJob');
    var
        __jobsIndex = 0,
        __timerJobs = null;

    __images.forEach(__image => {
        __image.addEventListener('click', () => {
            let __clickedIndex = Number.parseInt(__image.src.slice(__image.src.length - 5, __image.src.length - 4)) - 1;
            
            clearInterval(__timerJobs);
            __images.forEach(__img => { __img.classList.remove('is-active'); });

            __images[__clickedIndex].classList.add('is-active');
            __focusedPanelJob.src = __images[__clickedIndex].src;
            __jobsIndex = __clickedIndex;

            if(__clickedIndex === 0)
                __images[8].classList.remove('is-active');
            else
                __images[__clickedIndex - 1].classList.remove('is-active');

            setTimeout(startAutoGall, 3000);
        });
    });

    function startAutoGall() {
        __timerJobs = setInterval(() => {
            __images[__jobsIndex].classList.add('is-active');
            __focusedPanelJob.src = __images[__jobsIndex].src;

            if(__jobsIndex === 0)
                __images[8].classList.remove('is-active');
            else
                __images[__jobsIndex - 1].classList.remove('is-active');
            
            if(__jobsIndex++ >= 8)
                __jobsIndex = 0;
        }, 3000);
    }

    startAutoGall();
});