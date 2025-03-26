let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '64px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.intro-text', { delay: 200, origin: 'top' });
sr.reveal('.intro-picture', { delay: 450, origin: 'top' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

const ChasTasAudio = new Audio('./audio/ChasTas.mp3');
const GoolingooAudio = new Audio('./audio/Goolingoo.mp3');
const HairMinBileeChiAudio = new Audio('./audio/HairMinBileeChi.mp3');
const HowlMovingCastleAudio = new Audio('./audio/HowlMovingCastle.mp3');
const MarmaladAudio = new Audio('./audio/Marmalad.mp3');
const unuudruushoish = new Audio('./audio/unuudruushoish.mp3');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playIcon = playBtn.querySelector('i');

const songs = [
    {ele: ChasTasAudio, audioName: 'NENE - Chas Tas'}, 
    {ele: GoolingooAudio, audioName: 'NENE - Goolingoo'}, 
    {ele: HairMinBileeChiAudio, audioName: 'Jason - Hair min Bilee Chi'}, 
    {ele: HowlMovingCastleAudio, audioName: 'Howls Moving Castle OST'}, 
    {ele: MarmaladAudio, audioName: 'CTS,290,davaidasha,fruitybaachka,TUUG18 - Marmalad'},
    {ele: unuudruushoish, audioName: 'Vandebo - Unuudruus Hoish'},
];

let current = 5;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click', () => {
    if (currentSong.paused) {
        currentSong.play();
        playIcon.classList.replace('fa-play', 'fa-pause');  // Updated to Font Awesome classes
    } else {
        currentSong.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');  // Updated to Font Awesome classes
    }
});

const updateSong = (action) => {
    currentSong.pause(); 

    if (action === 'next') {
        current = (current + 1) % songs.length;  
    } else if (action === 'previous') {
        current = (current - 1 + songs.length) % songs.length;  
    }

    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
    currentSong.play();  
    playIcon.classList.replace('fa-play', 'fa-pause');  // Updated to Font Awesome classes
};

nextBtn.addEventListener('click', () => updateSong('next'));
prevBtn.addEventListener('click', () => updateSong('previous'));

window.onload = () => {
    currentSong.play()
        .then(() => {
            playIcon.classList.replace('fa-play', 'fa-pause');  // Updated to Font Awesome classes
        })
        .catch(error => {
            console.log("Autoplay failed:", error);
        });
};
