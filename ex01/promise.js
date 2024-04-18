//const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("informe qualquer número: "));

const promise = new Promise((resolve, reject) => {
    if (numero%2 == 0) {
        resolve()
    } else {
        reject()
    }
});

promise 
.then((valor) => {
    console.log("Número validade é par");
})

.catch((error) => {
    console.log("Error: número informado é impar.");
})

