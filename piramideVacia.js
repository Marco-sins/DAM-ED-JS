const prompt = require('prompt-sync')({sigint: true});

let altura = Number(prompt('Introduce la altura'));

for (let i = 1; i <= altura; i++)
{
    for (let j = i; j < altura; j++)
        process.stdout.write (' ');
    for (let j = 1; j <= (i * 2 - 1); j++)
    {
        if (i != altura)
        {
            if (j == 1 || j == (i * 2 - 1))
                process.stdout.write ('*');
            else
                process.stdout.write (' '); 
        }
        else
            process.stdout.write ('*');
    }
    console.log();
}