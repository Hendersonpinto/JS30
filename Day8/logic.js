const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
let hue = 0;
let startDrawing = false;
let direction = true;

function draw(event) {
    // THIS FUNCTION WILL BE CALL EVERY PIXEL THE MOUSE IS MOVED, SO IT IS TRIGGERED MANY TIMES
    if (!startDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(event);
    ctx.beginPath(); //Allows you to create a path for the line. 
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(event.x, event.y);
    ctx.stroke();
    positionX = event.x;
    positionY = event.y;
    hue++;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}


canvas.addEventListener('mousedown', (event) => {
    startDrawing = true;
    [positionX, positionY] = [event.x, event.y];
});
canvas.addEventListener('mouseup', () => startDrawing = false);
canvas.addEventListener('mouseout', () => startDrawing = false);
canvas.addEventListener('mousemove', draw);