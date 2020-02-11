ranges.forEach(range => {
    range.addEventListener('change', rangeChange);
    range.addEventListener('mousemove', rangeChange);
})

function rangeChange() {
    video[this.name] = this.value;
    console.log('firing')
    // When using ranges, we can use the property "name" as a "dataset"
    // In this case we set name equal to the video properties we want
    // to change: volume and playbackRate
}







// THIS IS HOW TO ACTIVATE RANGECHANGE ONLY WHILE THE CLICK IS DOWN
// IN THIS CASE I HAVE TO BIND THE THIS USING THAT BECAUSE WHEN CALLING A FUNCITON
// ONE LEVEL DEEPER THE THIS IS NOT PASSED, EVEN THOUGH I USED 
// THE OLD TYPES OF FUNCTIONS.
// I NEED TO UNDERSTAND WHY THE THIS IS NOT PASSED AND HAVE TO USE THAT

ranges.forEach(function (range) {
    // range.addEventListener('change', rangeChange);
    range.addEventListener('mousedown', () => clickIsDown = true)
    range.addEventListener('mouseup', () => clickIsDown = false)
    range.addEventListener('mousemove', function (event) {
        const that = this
        clickIsDown && rangeChange(event, that)
    });
})

function rangeChange(event, that) {
    video[that.name] = that.value;
    // When using ranges, we can use the property "name" as a "dataset"
    // In this case we set name equal to the video properties we want
    // to change: volume and playbackRate
}










// THE SAME ABOVE IS MET BY USING EVENT.TARGET INSTEAD OF THIS
// THIS APPORACH MIGHT BE BETTER SINCE THERE IS NO DOUBT ABOUT
//WHICH TARGET IS

ranges.forEach(function (range) {
    // range.addEventListener('change', rangeChange);
    range.addEventListener('mousedown', () => clickIsDown = true)
    range.addEventListener('mouseup', () => clickIsDown = false)
    range.addEventListener('mousemove', function (event) {
        clickIsDown && rangeChange(event)
    });
})

function rangeChange(event) {
    video[event.target.name] = event.target.value;
    // When using ranges, we can use the property "name" as a "dataset"
    // In this case we set name equal to the video properties we want
    // to change: volume and playbackRate
}