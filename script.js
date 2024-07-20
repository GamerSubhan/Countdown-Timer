const iconImages = document.querySelectorAll('.iconImages');
let clicked = false;

iconImages.forEach((element) => {
    element.addEventListener('click', () => {
        if(clicked === false)
        {
            element.style.fill = '#fb6087';
            clicked = true;
        }
        else
        {
            element.style.fill = '#8385A9';
            clicked = false;
        }
        console.log(element.fill);
    })
})

function startCountdown(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        let newDays = Math.floor(timer / (24 * 60 * 60));
        let newHours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        let newMinutes = Math.floor((timer % (60 * 60)) / 60);
        let newSeconds = Math.floor(timer % 60);

        if (newDays !== parseInt(display.days.textContent)) {
            display.days.textContent = newDays < 10 ? "0" + newDays : newDays;
            display.days.classList.add('flipdown');
            setTimeout(() => display.days.classList.remove('flipdown'), 600);
        }
        if (newHours !== parseInt(display.hours.textContent)) {
            display.hours.textContent = newHours < 10 ? "0" + newHours : newHours;
            display.hours.classList.add('flipdown');
            setTimeout(() => display.hours.classList.remove('flipdown'), 600);
        }
        if (newMinutes !== parseInt(display.minutes.textContent)) {
            display.minutes.textContent = newMinutes < 10 ? "0" + newMinutes : newMinutes;
            display.minutes.classList.add('flipdown');
            setTimeout(() => display.minutes.classList.remove('flipdown'), 600);
        }
        if (newSeconds !== parseInt(display.seconds.textContent)) {
            display.seconds.textContent = newSeconds < 10 ? "0" + newSeconds : newSeconds;
            display.seconds.classList.add('flipdown');
            setTimeout(() => display.seconds.classList.remove('flipdown'), 600);
        }

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    const fourteenDays = 14 * 24 * 60 * 60; // 14 days in seconds
    const display = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    startCountdown(fourteenDays, display);
};



