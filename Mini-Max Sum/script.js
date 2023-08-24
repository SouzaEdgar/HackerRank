var input = require('fs').readFileSync('./Mini-Max Sum/stdin', 'utf8');
var lines = input.split('\n');

/*
The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.
Hints: Beware of integer overflow! Use 64-bit Integer.
*/
function miniMaxSum(arr) {
    let max = 0;
    let min = 0;
    let aux = 0;
    let total = 0;
    let array = Array.from(arr);

    for(let x in array) {
        total += parseInt(array[x]);
    }
    for(let z in array) {
        aux = total - parseInt(array[z]);
        if(z == 0) {
            max += aux;
            min += aux;
        }
        if(aux > max) max = aux;
        else if(aux < min) min = aux;
    }
    console.log(`${min} ${max}`);
}

// Deixar arr como um Number[] assim como no HackerRank
let arr = [];
const aux = input.split(' ');
for(let x in aux) {
    arr.push(parseInt(aux[x]));
}
miniMaxSum(arr);

