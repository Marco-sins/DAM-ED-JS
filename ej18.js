//18. Escribir un programa modular que simule un cajero automatico con las opciones de depositos, 
// retiros y ver saldo.

const prompt = require('prompt-sync')({sigint: true});

function menu()
{
    console.log('Operaciones cajero');
    console.log('------------------');
    console.log('1. Depositar');
    console.log('2. Retirar');
    console.log('3. Ver saldo');
    console.log('X. Salir');

    let op = prompt("Elige opcion: ");

    return (op);
}

function depositar()
{
    let cantidad = Number(prompt('Ingrese la cantidad a ingresar: '));

    return (cantidad);
}

function retirar()
{
    let cantidad = Number(prompt('Ingresa la cantidad que desea retirar: '));

    return (cantidad);
}

function main()
{
    let operacion = '';
    let saldoCuenta = 0;

    while (operacion !== 'X')
    {
        operacion = menu();
        if (operacion === '1')
            saldoCuenta += depositar();
        else if (operacion === '2')
            saldoCuenta -= retirar();
        else if (operacion === '3')
            console.log('El saldo que te queda es: ', saldoCuenta);
        else if (operacion === 'X')
            break;
        else
            console.log('Error');
    }
}

main();