const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt('Introduce un numero: '));
let i = 2;
while (i < n)
{
    if (n % i == 0)
        console.log(i);
    i++;
}