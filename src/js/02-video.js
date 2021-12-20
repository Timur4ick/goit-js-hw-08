import Player from '@vimeo/player';

const idPlayer = new Vimeo.Player('vimeo-player');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', () => {
  player.getCurrentTime().then(sec => {
    console.log(sec);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(sec));
  });
});

const timeToStart = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
console.log(timeToStart);
player.setCurrentTime(timeToStart);
