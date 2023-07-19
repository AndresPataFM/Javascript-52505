// En un documento HTML, tenemos un tag <h1> con el id “titulo”, y un tag lista desordenada con el id “listado”. Además, tenemos el siguiente array:

// Crearemos una función llamada cargarDOM(), la cual se conectará con ambos elementos HTML, y asignará el valor “www.mandafruta.com” en el título, mientras que generará los list ítems con cada una de las frutas, en el elemento HTML de lista desordenada. 

const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera']

/* function cargarDOM(){
    const titulo = document.getElementById("titulo")
    // console.log(titulo)
    const lista = document.getElementById("listado")
    // console.log(lista)
    titulo.innerText="www.mandafruta.com"
    frutas.forEach(fruta=>{
        lista.innerHTML+=`<li>${fruta}</li>`
    })
} */
/* ESTE ES CON ERRORES
function cargarDOM() {
    const titulo = document.querySelector("titulo")
    const listado = document.querySelector(".listado")
    titulo.innerText = "www.mandafruta.com"
    frutas.forEach(fruta => {
        listado.innerHTML += '<li>{fruta}</li>`
    })
} 
*/
function cargarDOM() {
    const titulo = document.querySelector("#titulo")
    const listado = document.querySelector("#listado")
    titulo.innerText = "www.mandafruta.com"
    frutas.forEach(fruta => {
        listado.innerHTML += `<li>${fruta}</li>`
    })
} 
cargarDOM()

// Preguntas guía
// ¿En qué se asemeja al código del ejercicio anterior? ¿En qué se diferencia?
// ¿Qué debería ocurrir? ¿Cuáles son las instrucciones que da este código?
// ¿Por qué eso no sucede?
// ¿Cómo harías para lograr que el código se ejecute con éxito?