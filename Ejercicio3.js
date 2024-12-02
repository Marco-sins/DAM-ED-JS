const prompt = require('prompt-sync')({sigint: true});

let h = Number(prompt('Introduce la altura de la figura: '));

if (h % 2 != 0)
{
    for (let b = 1; h > 0; b++)
    {
        for (let i = 1; (i <= h) || (i <= b); i++)
        {
            if (i == b || i == h)
                process.stdout.write ('*');
            else
                process.stdout.write (' ');
        }
        console.log();
        h--;
    }

}
else
    console.log('La altura debe de ser impar');