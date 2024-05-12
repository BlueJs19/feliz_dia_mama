import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function Fiestas(){
    confetti()
}

document.getElementById('confetti').addEventListener('click', Fiestas)