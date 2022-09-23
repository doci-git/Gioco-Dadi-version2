//select the button
const buttons = document.getElementById('#btn');
// create an array
const number = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png', ];

const number2 = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', '.img/dice5.png', '.img/dice6.png', ];
// created an object with foto to to make some test also
/*
done with succes to acces the object same as the array
const foto = {
    foto1: '/img/dice1.png',
    foto2: '/img/dice2.png',
    foto3: '/img/dice3.png',
    foto4: '/img/dice4.png',
    foto5: '/img/dice5.png',
    foto6: '/img/dice6.png',
    const foto1 = {
    foto1: '/img/dice1.png',
    foto2: '/img/dice2.png',
    foto3: '/img/dice3.png',
    foto4: '/img/dice4.png',
    foto5: '/img/dice5.png',
    foto6: '/img/dice6.png',
}*/
// add event to button
buttons, addEventListener('click', function name() {
    // take a random number
    let random = Math.floor(Math.random() * number.length);
    let random2 = Math.floor(Math.random() * number2.length);

    // select the div and injected random number
    const div = document.querySelector('.img1').src = number[random];
    const div2 = document.querySelector('.img2').src = number[random2];

    // used if statment with operators
    if (div > div2) {
        setTimeout(() => {
            document.querySelector('h1').innerHTML = 'player  <span>1</span> win';
            let audio = new Audio('./sounds/win-efect.wav');
            audio.play();
        }, 2000);

    } else if (div < div2) {
        setTimeout(() => {
            document.querySelector('h1').innerHTML = 'player  <span>2</span> win';
            let audio = new Audio('./sounds/win-efect.wav');
            audio.play();
        }, 2000);
    } else {
        setTimeout(() => {
            document.querySelector('h1').innerHTML = 'Draw';
        }, 2000);
    }
    //console.log(div, div2)

    let audio = new Audio('./sounds/button-efect.wav');
    audio.play();
    rotate1();

});


function rotate1() {
    document.querySelector('.img1').style.transform = 'rotateZ(180deg)';
    document.querySelector('.img2').style.transform = 'rotateZ(180deg)';

    document.querySelector('.div1').style.transitionDuration = '2s';

    setTimeout(function reload() {
        document.querySelector('.img1').style.transform = 'rotateZ(-720deg)';
        document.querySelector('.img2').style.transform = 'rotateZ(-720deg)';

    }, 1000);

};