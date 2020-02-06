console.log('Hola Mundo');

'Declaracion de una variable constante'
const PI = 3.14;


console.log(`El valor de PI es: ${PI}`)

'Condiciones'

let edad = 21;

if (edad >= 21) {
        console.log('Es mayor de edad');
    }else{
        console.log('Es menor de edad');
    }

'ciclos'
    let contador = 0;
    while (contador < 3) {
        console.log(`El valor del contador es ${contador}`);
        contador ++;
} 
for (let i = 0; i < contador; i++) {
    console.log(`El valor de i es ${i}`);
}

'Declarar un arreglo'
const numeros = [10, 20, 15, 40, 50];
console.log(numeros);

'Agregar al arreglo'
numeros.push(70)
console.log(numeros)
console.log(numeros[1])

'Sacar el ultimo digito agregado'
let ultimo = numeros.pop()

console.log('----');
console.log(numeros)
console.log(ultimo)

'Mostrar la longitud'
console.log(`Longitud: ${numeros.length }`)


for(num in numeros){
    console.log()
}