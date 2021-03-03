const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const lados = input.split(' ').map((n) => parseFloat(n));

function ordernar(a, b) {
    return b - a
}
lados.sort(ordernar)

const [a, b, c] = lados.map((n) => n);

if(a >= (b+c)){
    console.log('NÃO FORMA TRIANGULO');
    return
}

if (Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log('TRIANGULO RETANGULO');
}

if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log('TRIANGULO OBTUSANGULO');
}

if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log('TRIANGULO ACUTANGULO');
}

if(a==b && a==c && b==c){
    console.log('TRIANGULO EQUILATERO');
}

if(a==b || a==c || b==c){
    console.log('TRIANGULO ISOSCELES');
}