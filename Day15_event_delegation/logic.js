const form = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];



function addItem(event) {
    event.preventDefault();
    const itemValue = this.querySelector('[name=item]').value;
    const item = {
        itemValue,
        done: false

    };
    this.reset();
    console.log(item);
}


form.addEventListener('submit', addItem);