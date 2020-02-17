const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
console.log(hero)
const walk = 200

function textEffect(event) {
    const {
        clientX: x,
        clientY: y
    } = event;

    const xTransformed = (x / hero.offsetWidth * walk) - (walk / 2);
    const yTransformed = (y / hero.offsetHeight * walk) - (walk / 2);
    text.style.textShadow = `
    ${xTransformed}px ${yTransformed}px 0 rgba(0, 0, 0, 0.4),
    ${xTransformed}px ${yTransformed * -1}px 0 rgba(255, 0, 0, 0.4),
    ${xTransformed * -1}px ${yTransformed * -1}px 0 rgba(0, 255, 0, 0.2),
    ${xTransformed * -1}px ${yTransformed}px 0 rgba(0, 0, 255, 0.4)`;

}


hero.addEventListener('mousemove', textEffect)