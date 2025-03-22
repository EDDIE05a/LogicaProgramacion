// Ejercicio 1️⃣: Devolver todos los números pares en un array

function numerosPares(n){
    let numPares = [ ];
    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            numPares.push(i);
        }
    }

    return numPares;
}


// Ejercicio 2️⃣: Contar cuántas veces aparece una letra en un texto

/* METODOS
    SPLIT -> Convierte en array segun el espacio o valor entre comillas (""," " o ",")
*/

function separarPalabras(frase){
    return frase.split(" ");
}

/* METODOS
    POP -> Elimina el ultimo elemento de un array y lo devuelve
*/

function eliminarUltimoElemento(array){
    array.pop();
    return array;
}

/* METODOS
    JOIN -> Convierte en string segun el espacio o valor entre comillas (""," " o ",")
*/

function unirPalabras(array){
    return array.join(" ");
}
