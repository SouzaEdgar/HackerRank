var input = require('fs').readFileSync('./PlusMinus/stdin', 'utf8');
var lines = input.split('\n');

function plusMinus(arr) {
    let aux = 0;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const x = arr.toString().split(' ');
    /*    Modificação para o HackerRank (pois la o arr é um Number[])
    let x = arr;
    x = x.toString().split(',');
    */
    
    for(let z = 0; z < x.length; z++) {
        aux++;
        const val = parseInt(x[z]);
        if(val === 0) {
            zero++;
        } else
        if(val > 0) {
            positive++;
        } else {
            negative++;
        }
    }
    console.log((positive/aux).toFixed(6));
    console.log((negative/aux).toFixed(6));
    console.log((zero/aux).toFixed(6));
}

const arr = lines[1];
plusMinus(arr);

