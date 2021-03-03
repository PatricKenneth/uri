const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const raio = parseFloat(input).toFixed(2);
const pi = 3.14159;

function calcularVolume(raio) {
    const volume = (4/3) * pi * Math.pow(raio, 3)
    console.log(volume.toFixed(3));
};

calcularVolume(raio);
