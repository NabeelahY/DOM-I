let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let hundreds = document.getElementById('msHundreds');
let tens = document.getElementById('msTens');

let timerInterval;

let digits = document.querySelector('div.digits');
console.log(digits.children);

function timer () {
    let seconds = 0;
    secondTens.innerText = 0;
    secondOnes.innerText = 0;
    hundreds.innerText = 0;
    tens.innerText = 0;

    function incrementer () {
        tens.innerText++;
        if (tens.innerText > 9) {
            tens.innerText = 0;
            hundreds.innerText++
        }
        if(hundreds.innerText > 9) {
            hundreds.innerText = 0;
            secondOnes.innerText++;
        }
        if(secondOnes.innerText > 9) {
            secondOnes.innerText = 0;
            secondTens.innerText++;
        }
        if(secondTens.innerText === '1') {
            clearInterval(timerInterval);
            [...digits.children].map(e => e.setAttribute('style', 'color: red'));
        }
    }

    return incrementer;
}

timerInterval = setInterval(timer(), 10);