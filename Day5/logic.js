const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('panel--open');
};

function toggleActive(event) {
    console.log(event);
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('panel--open--active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));