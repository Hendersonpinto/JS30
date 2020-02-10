const checkboxes = document.querySelectorAll(".list__input")
let lastChecked;

function crosstext(event) {

    let inBetween = false;
    if (event.shiftKey) {
        console.log("wohoo")
        checkboxes.forEach((checkbox) => {
            // console.log(this)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log("turn on")
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', crosstext));