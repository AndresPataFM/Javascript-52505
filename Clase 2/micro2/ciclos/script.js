// Actividad 01:
// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// =========================================================

// Actividad 02:
// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         alert("Esto tiene más lados que un triangulo")
//     }
//     alert("lado");
// }

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?

// =========================================================

// Actividad 01:
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

// const nro = parseInt(prompt("Ingrese un número para saber si es par"))
// const resto = nro % 2

// // el 0 es un número

// if(resto === 0){
//     alert(`El nro ${nro} es par`)
// } else {
//     alert(`El nro ${nro} es impar`)
// }


// =========================================================

// Actividad 02:
// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

let condicion = true
while(condicion){
    const nro = parseInt(prompt("Ingrese un número para saber si es par"))
    const resto = nro % 2
    // el 0 es un número
    if(isNaN(resto)){
        alert("dato inválido")
    } else if(resto === 0){
        alert(`El nro ${nro} es par`)
    } else {
        alert(`El nro ${nro} es impar`)
    }
    condicion = confirm("¿Desea saber si otro número es par?")
}
