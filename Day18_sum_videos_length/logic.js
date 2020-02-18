const videos = document.querySelectorAll('[data-time]')
console.log(videos)

const videosArray = [...videos]

const totalSecs = videosArray.reduce((tally, video) => {
    const [mins, secs] = video.dataset.time.split(':').map(parseFloat)
    return tally + (mins * 60) + secs;
}, 0)

const hours = Math.floor(totalSecs / 3600);
const minutes = Math.floor((totalSecs % 3600) / 60)
const seconds = Math.floor(totalSecs % 60)

console.log(`Total of ${hours} hours with ${minutes} minutes and ${seconds} seconds `)