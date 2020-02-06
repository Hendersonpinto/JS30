const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

function filterArray(query, cities) {
    return cities.filter(city => {
        // return city.city.toLowerCase().includes(query.toLowerCase()) || city.state.toLowerCase().includes(query.toLowerCase());
        // THIS METHOD IS WITH INCLUDE BUT IS LARGER AND NOT SO FLEXIBLE AS TO USE REG EXP
        // FOR CASE INSENSITIVE SEARCHES IS WAY BETTER TO USE A REG EXP


        const regex = new RegExp(query, 'gi');
        return city.city.match(regex) || city.state.match(regex)
        // THIS IS SHORTER AND NICER, WE CREATED A REGEX WITH NEW SINCE WE NEED TO PASS A FLAG
        // TO MAKE IT CASE INSENSITIVE
    })
};

function displayResults() {
    const filteredArray = filterArray(this.value, cities);
    const html = filteredArray.map((city) => {
        const reg = new RegExp(this.value, 'gi')
        const cityNameHighlighted = city.city.replace(reg, `<span class="highlighted"> ${this.value}</span>`)
        const stateNameHighlighted = city.state.replace(reg, `<span class="highlighted"> ${this.value}</span>`)
        // The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
        // Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).
        return `
        <li> 
        <span class="name">${cityNameHighlighted} - ${stateNameHighlighted}</span>
        <span class="population">${city.population}</span>
         </li>
        `
    }).join('');
    console.log(html);

    suggestionsResults.innerHTML = html;
}

const searchField = document.querySelector('.searchField')
const suggestionsResults = document.querySelector(".suggestions")

searchField.addEventListener('change', displayResults);
searchField.addEventListener('keyup', displayResults)