var input = require('fs').readFileSync('./FizzBuzz/stdin', 'utf8');
var lines = input.split('\n');

function fizzBuzz(n) {
    for(let x = 1; x <= n; x++) {
        if(x%3 === 0 && x%5 === 0) {
            console.log('FizzBuzz');
        } else
        if(x%3 === 0 && x%5 !== 0) {
            console.log('Fizz');
        } else
        if(x%3 !== 0 && x%5 === 0) {
            console.log('Buzz');
        } else {
            console.log(x);
        }
    }

}

const n = input;
fizzBuzz(n);
