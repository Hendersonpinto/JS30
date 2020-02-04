window.addEventListener('keydown', (event)=>{
    console.log(event);
    const audio = document.querySelector(`audio[data-key=${event.code}]`);
    const key = document.querySelector(`.key[data-key=${event.code}]`)
    console.dir(key);
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();


    // key.addEventListener('transitionend', (event) => {
    //     if (event.propertyName !== 'transform') return;
    //     console.log(this); 
    //     // 'THIS' WILL BE THE WINDOW SINCE ARROW FUNCTIONS DO NOT GET THEIR OWN THIS
    //     this.classList.remove('active');
    // })


    key.addEventListener('transitionend', function (event){
        if (event.propertyName !== 'transform') return;  // THE ONLY EVENT THAT IT MATTERS TO ME IS THE TRANSFORM, BUT THE CHANGE IN BORDER COLOR AND SCALE ARE ALSO CONSIDERED AS TRANSITIONS
        // 'THIS' WILL BE NOW THE KEY SINCE WE CHANGE ARROW FUNCTION TO OLD SYNTAX
        this.classList.remove('active');
        console.log('removed')
    })
})



// window.addEventListener('keyup', (event)=>{
//     const audio = document.querySelector(`audio[data-key=${event.code}]`);
//     const key = document.querySelector(`.key[data-key=${event.code}]`)
//     key.classList.remove('active');
// }
// )      THIS METHOD WORKS AS WELL