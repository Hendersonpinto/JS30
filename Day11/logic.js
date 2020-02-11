const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
// THIS LINE ABOVE SEARCH FOR ANYTHING THAT HAS A DATA-SKIP ATTRIBUTE, IT CAN BE AN ID OR CLASS OR TAG
const ranges = player.querySelectorAll('.player__slider');
const wideScreen = player.querySelector('.widescreen')
let clickIsDown = false;


function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    const icon = video.paused ? '►' : '❚❚';
    toggle.innerHTML = icon;
}

function skipVideo() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeChange(event) {
    video[event.target.name] = event.target.value;
    // When using ranges, we can use the property "name" as a "dataset"
    // In this case we set name equal to the video properties we want
    // to change: volume and playbackRate
}

function updateProgressBar() {
    const percentageSoFar = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentageSoFar}%`
}

function scrub(event) {
    console.dir(event);
    const newPoint = (event.offsetX / progress.offsetWidth) * video.duration;
    video['currentTime'] = newPoint
}

function openScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        /* IE/Edge */
        video.msRequestFullscreen();
    }

}

video.addEventListener(('click'), togglePlay);
toggle.addEventListener(('click'), togglePlay);
wideScreen.addEventListener('click', openScreen);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skipVideo))
ranges.forEach(function (range) {
    // range.addEventListener('change', rangeChange);
    range.addEventListener('mousedown', () => clickIsDown = true)
    range.addEventListener('mouseup', () => clickIsDown = false)
    range.addEventListener('mousemove', function () {
        clickIsDown && rangeChange(event)
    });
})
video.addEventListener('timeupdate', updateProgressBar);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => {
    clickIsDown && scrub(event);
})
progress.addEventListener('mousedown', () => {
    clickIsDown = true
})
progress.addEventListener('mouseup', () => {
    clickIsDown = false
});