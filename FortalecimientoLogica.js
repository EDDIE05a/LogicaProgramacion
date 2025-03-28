// EN ESTE ARCHIVO SE REALIZARAN EJERCICIOS QUE FORTALECERAN MI LOGICA A LA HORA
// DE USAR CICLOS, CONDICIONALES, ARRAY, ETC.

// EJERCICIO A
// Encontrar el número menor en un array (sin Math.min)

function numeroMenor (array) {
    let menor = array[0];
    for(let i = 1; i < array.length; i++ ){
        if(array[i] < menor){
           menor = array[i]; 
        }
    }
    return menor;
}

// EJERCICIO B
// Crea la función sumarNumeros(array), que recorra el array y devuelva la suma de todos los números.

function sumarNumeros(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

// EJERCICIO C
// Escribe contarMayores(array, limite), que cuente cuántos valores del array son mayores que limite.

// function contarMayores(array, limite){

//     for(let i; i < array.length; i++){
//         if
//     }
// }