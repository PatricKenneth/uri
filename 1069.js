const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const linhas = input.split(' ');
const separacao = [];

for (let i = 0; i < linhas.length; i++) {
    let element = linhas[i].split('');
    for (let j = 0; j < element.length; j++) {
        if (element[j] === '.') {
           element =  element.filter((item) => item !== '.');
        }
    }
    separacao.push(element)
}

let diamantes = [];
let numero = 0;

for (let i = 0; i < separacao.length; i++) {
    const lados = separacao[i];
    for (let j = 0; j < lados.length; j++) {
        const lado1 = lados[j];
        if(lado1 === '<'){
            lados[j] = ''
            for (let h = 0; h < lados.length; h++) {
                const lado2 = lados[h];
                if(lado2 === '>'){
                    lados[h] = '';
                    numero+=1;
                }
            }
        }
    }
    diamantes.push(numero);
    numero = 0;
}

console.log(diamantes);