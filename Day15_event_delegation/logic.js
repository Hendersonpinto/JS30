const form = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
    event.preventDefault();
    const itemValue = this.querySelector('[name=item]').value;
    const item = {
        itemValue,
        done: false
    };
    items.push(item);
    this.reset();
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
}

function addItem2(event) {
    event.preventDefault();
    const name = this.querySelector('[name=item').value;
    if (itemsList.firstElementChild.innerText === 'Loading Tapas...') {
        itemsList.innerHTML = '';
    }
    itemsList.insertAdjacentHTML(
        'beforeend',
        `<li>
    <label for="">${name}</label>
    </li>`
    );
}

function populateList(plates = [], platesList) {
    console.log('this ran')
    platesList.innerHTML = plates
        .map((plate, i) => {
            console.log(plate);
            return `
            <li>
              <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
              <label for="item${i}">${plate.itemValue}</label>
            </li>
          `;
        })
        .join('');
}

function toggleCheck(event) {
    if (!event.target.matches('input')) return;
    console.log(event)
    const index = event.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList)
}



form.addEventListener('submit', addItem);
itemsList.addEventListener(('click'), toggleCheck)
populateList(items, itemsList)