const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function transformHours(hours){
    return (hours>12 ? hours - 12 : hours);
}

function setTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // const seconds = 0;
    let secondsDeg = seconds*6;
    let minutesDeg = minutes*6;
    let hoursDeg = transformHours(hours)*30;
    if ((hours || minutes || seconds) === 0) {
        const hands = document.querySelectorAll(".hand");
        hands.forEach((hand)=>{
            console.log(hand);
            hand.style.transition = "all 0s ease 0s";
        })
    }
    secondsHand.style.transform = `rotate(${secondsDeg + 90}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg + 90}deg)`;
    hoursHand.style.transform = `rotate(${hoursDeg + 90}deg)`;

}
setInterval(setTime, 1000);