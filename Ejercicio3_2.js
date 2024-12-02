const prompt = require('prompt-sync')({sigint: true});

let altura = Number(prompt('Introduce el altura de la figura: '));
let ancho = Number(prompt('Introduce el ancho de la figura: '));

let hueco_altura = 1;
let hueco_ancho;
for (let i = 1; i <= (altura * 2) + 6; i++)
{
    hueco_ancho = 1;
    for (let j = 1; j <= ancho + 6; j++)
    {
        if (hueco_altura == 1 || hueco_altura == 3 || hueco_altura == 5)
            process.stdout.write ('*');
        else if (hueco_altura == 2 || hueco_altura == 4)
        {
            if (hueco_ancho == 1 || hueco_ancho == 3)
                process.stdout.write ('*')
            else if (hueco_ancho == 2)
                process.stdout.write (' ');
            if (j == 3 || j == ancho + 3)
                hueco_ancho++;
        }
    }
    if (i == 2 || i == altura + 2 || i == altura + altura + 4 || i == altura + 4)
        hueco_altura++;
    console.log();
}
