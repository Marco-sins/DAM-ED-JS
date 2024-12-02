const prompt = require('prompt-sync')({sigint: true});

let altura = Number(prompt('Introduce la altuar de la piramide'));
for (i = altura; i >= 1; i--)
{
    for (let j = i; j < altura; j++)
        process.stdout.write(' ');
    for (let j = 1; j <= (i * 2 - 1); j++)
        process.stdout.write ('*');
    console.log();
}