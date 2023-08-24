var input = require('fs').readFileSync('./Time Conversion/stdin', 'utf8');
var lines = input.split('\n');

/*
    s = '12:01:00PM'
    return '12:01:00'

    s = '12:01:00AM'
    return '00:01:00'
*/

function timeConversion(s) {
    let hr = s.substr(0,2);

    if(s.endsWith('PM')) {
        s = s.replace('PM','');
        if(parseInt(hr) < 12) {
           s = s.replace(`${hr}`,`${parseInt(hr) + 12}`);
        }
    } else {
        s = s.replace('AM','');
        if(parseInt(hr) >= 12) {
           s = s.replace(`${hr}`, `${parseInt(hr) - 12}`);
           s = 0 + s;
        }
    }
    return s;
}

let s = input;
const result = timeConversion(s);
console.log(result + '\n');
