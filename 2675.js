let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let allcnt = Number(input[0]);
let res = '';

for(let i = 1; i <= allcnt; i++){
    let cnt = Number(input[i].split(' ')[0]);
    let parse = input[i].split(' ')[1];

    for (let j=0; j < parse.length; j++){
        for (let k=0; k<cnt; k++){
            res += parse[j];
        }
    }
    res +='\n';

}

console.log(res);
