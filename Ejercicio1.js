const prompt = require('prompt-sync')({sigint: true});

let precio = Number(prompt('Introduce el precio de la entrada: '));
let asistentes = Number(prompt('Introduce el numero de asistentes: '));
let total = 0;
let totalSinDescuento = precio * asistentes;

function getDescuento(edad)
{
    if ((edad >= 5 && edad <= 14) || edad >= 66)
        return (0.3);
    else if ((edad >= 15 && edad <= 19) || (edad >= 41 && edad <= 65))
        return (0.25);
    else if (edad >= 20 && edad <= 40)
        return (0.1);
}

function leerValor(asistentes, precio)
{
    while (asistentes > 0)
    {
        let descuento;
        let edad = Number(prompt('Introduce la edad del asistente: '));
        if (edad >= 5)
        {
            descuento = getDescuento(edad);
            total += precio - (precio * descuento);
            asistentes--;
        }
        else
            console.log('No pueden entrar menores de 5 años, vuelve a meter la edad');
    }
    console.log('El precio total es: ', total, '€');
    console.log('El teatro deja de percibir con los descuentos: ', totalSinDescuento - total, '€')
}

leerValor(asistentes, precio);