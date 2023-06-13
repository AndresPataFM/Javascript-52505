/* 
Imaginemos un sistema de turnos médicos, queremos recorrer un ciclo FOR a partir de una función que recibe un parámetro numérico, el cual será quien defina cuántas veces iterará el ciclo para mostrar turnos disponibles para este mes:

¿Cómo podríamos lograrlo? 
*/

function turnosMensual(numero){
    for(let i = 1; i <= numero;i++){ // i++ es igual a i = i+1
        console.log("Turno: "+i)
    }
}


// ==================================================

// Crea una función que reciba dos parámetros numéricos y un tercer parámetro correspondiente al operador aritmético. 
// La función debe retornar el resultado de la operación entre estos dos números.
// Crea una segunda función que utilice prompt() y le pida dos números al usuario. 
// Luego, crea un tercer prompt() que le pida al usuario el operador aritmético necesario para realizar la operación matemática.
// Esta misma función debe constatar que los 2 primeros valores ingresados sean números, y que el tercer valor ingresado sea un símbolo aritmético.
// Si todo está OK, deberá llamar a la primera función pasándole todos estos parámetros, y esperando que la función le retorne el resultado de la operación aritmética



// ==================================================
// Find the bug
// Actividad 01:

const precioConIVA = (imp, iva) => imp * iva;
// precioConIVA(importe, IVA)


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// Actividad 02:


const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const pedirMetros2 = parseFloat(prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:"));
// const calcularPoliza = m2 => M2 * valorM2 * comision;
const calcularPoliza = metros2 => {
    return metros2 * valorM2 * comision
};
const valorPoliza = calcularPoliza(pedirMetros2);
console.log("El costo de la póliza es: $", valorPoliza);

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?