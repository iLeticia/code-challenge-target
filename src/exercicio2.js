const input = require('readline-sync');

const num = parseInt(input.question("Digite um número: "));
let a = 0, b = 1, c;
let pertence = false;

if (num === 0 || num === 1){
    pertence = true;
} else {
    for (let i = 2; i <= num; i++) {
        c = a + b;
        if (c === num) {
            pertence = true;
            break;
        }
        a = b;
        b = c;
    }
}

if (pertence) {
    console.log(num + " pertence à sequência de Fibonacci.");
} else {
    console.log(num + " não pertence à sequência de Fibonacci.");
}

