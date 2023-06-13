// Scope

// Bloque de código
// código declarado entre llaves {}

// Cada bloque de código genera su propio scope

// Las funciones pueden transmitir datos de su scope

let global = "hola soy global"
{
    let enScope = 1
    {
        let enScope2 = 2
        var feo = 25
    }
}
{
    let enScope3 = 3
    {
        let enscope4 = 123132
        
    }
}

console.log("global", global)
console.log("enScope", enScope)
console.log("enScope2", enScope2)
console.log("enScope3", enScope3)
console.log("feo", feo)