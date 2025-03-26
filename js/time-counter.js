function timeSince(date) {
    const now = new Date();
    const past = new Date(date);

    const years = now.getFullYear() - past.getFullYear();
    const months = now.getMonth() - past.getMonth() + (years * 12);
    const days = Math.floor((now - past) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((now - past) / (1000 * 60 * 60));
    const minutes = Math.floor((now - past) / (1000 * 60));
    const seconds = Math.floor((now - past) / 1000);

    return {
        years: Math.floor(months / 12),
        months: months % 12,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    };
}

function updateTimeCounter() {
    const startDate = '2023-05-24T13:24:09';
    const timePassed = timeSince(startDate);function timeSince(date) {
        const now = new Date();
        const past = new Date(date);
    
        const years = now.getFullYear() - past.getFullYear();
        const months = now.getMonth() - past.getMonth() + (years * 12);
        
        // Calculate exact day difference by adjusting for month boundaries
        let adjustedPast = new Date(past.getFullYear(), past.getMonth() + months, past.getDate());
        let days = Math.floor((now - adjustedPast) / (1000 * 60 * 60 * 24));
    
        const hours = Math.floor((now - past) / (1000 * 60 * 60));
        const minutes = Math.floor((now - past) / (1000 * 60));
        const seconds = Math.floor((now - past) / 1000);
    
        return {
            years: Math.floor(months / 12),
            months: months % 12,
            days: days, // No more % 30
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60
        };
    }
    
    function updateTimeCounter() {
        const startDate = '2023-05-24T13:24:00';
        const timePassed = timeSince(startDate);
    
        // Update the respective HTML elements within the 'launch-time' div
        document.querySelector('.launch-time div:nth-child(1) p').innerHTML = timePassed.years;
        document.querySelector('.launch-time div:nth-child(2) p').innerHTML = timePassed.months;
        document.querySelector('.launch-time div:nth-child(3) p').innerHTML = timePassed.days;
        document.querySelector('.launch-time div:nth-child(4) p').innerHTML = timePassed.hours;
        document.querySelector('.launch-time div:nth-child(5) p').innerHTML = timePassed.minutes;
        document.querySelector('.launch-time div:nth-child(6) p').innerHTML = timePassed.seconds;
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const sr = ScrollReveal();
        sr.reveal('.launch-time', { delay: 200, origin: 'top' });
        sr.reveal('.btn', { delay: 500, origin: 'right' });
        sr.reveal('.content p', { delay: 450, origin: 'top' });
        sr.reveal('.content h1', { delay: 500, origin: 'top' });
        sr.reveal('.btn', { delay: 500, origin: 'right' });
        setInterval(updateTimeCounter, 1000);
    });

    // Update the respective HTML elements within the 'launch-time' div
    document.querySelector('.launch-time div:nth-child(1) p').innerHTML = timePassed.years;
    document.querySelector('.launch-time div:nth-child(2) p').innerHTML = timePassed.months;
    document.querySelector('.launch-time div:nth-child(3) p').innerHTML = timePassed.days;
    document.querySelector('.launch-time div:nth-child(4) p').innerHTML = timePassed.hours;
    document.querySelector('.launch-time div:nth-child(5) p').innerHTML = timePassed.minutes;
    document.querySelector('.launch-time div:nth-child(6) p').innerHTML = timePassed.seconds;
}

document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal();
    sr.reveal('.launch-time', { delay: 200, origin: 'top' });
    sr.reveal('.btn', { delay: 500, origin: 'right' });
    sr.reveal('.content p', { delay: 450, origin: 'top' });
    sr.reveal('.content h1', { delay: 500, origin: 'top' });
    sr.reveal('.btn', { delay: 500, origin: 'right' });
    setInterval(updateTimeCounter, 1000);
});
