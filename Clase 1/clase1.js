/* 
palabraReservada nombreSinEspacio = valor

let //se puede reasignar valor
const //no se puede reasignar valor

var ⛔ No la usen

*/

let numerito = 5;
// console.log(numerito)
numerito = 3;
// console.log(numerito)

const numerote = 555555;

let camelCase;
// let kebab-case;
let snake_case;

let variable1 = "var1";
variable1 = false;

const num1 = 2;
const num2 = 5*2;

var mala = false; //no la usen


const suma = num1 + num2;

console.log("suma:", suma)
// console.log("floats", 1.2-1)
// alert("Bienvenido a mi página")

// const confirmando = confirm("¿Si o no?")
// console.log("confirmando: ",confirmando)

const pidiendo = prompt("Decime tu nombre")
console.log(pidiendo)

// Concatenar strings:
const concatenar = "hola" + "chau" ?? "holachau"
const estoNo = "hola" - "chau" // Nan

// Conversion innata de tipo de datos en JS
const stringONumero1 = "5" + 3 //8
const stringONumero2 = "5" + "24" //29

// Template Strings // Template literals
// Con las backtick ` y ${} se pueden insertar lógica de Js a strings
// pueden insertarse variables
let manzanaInicial = 7
const templateString = `Si Juan tiene 7 manzanas y le regala 3 a Pedro le quedan ${manzanaInicial-3} manzanas`

