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


//--------------------------------------------------------METODOS INTERACCION CON ARRAYS--------------------------------------------------------------

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

/* METODOS
    PUSH -> Agrega elementos aL final de un array
*/

function agregarElemento(array, elemento){
    array.push(elemento);
    return array;
}

/* METODOS
    SHIFT -> Elimina el primer elemento de un array y lo devuelve.
*/

function eliminarPrimerElemento(array){
    array.shift();
    return array;
}

/* METODOS

    UNSHIFT -> Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud.
*/

function agregarAlInicio(array, elemento){
    array.unshift(elemento);
    return array;
}
 
/* METODOS
    SLICE ->  Copia una parte de un array en un nuevo array sin modificar el original.
*/
function obtenerSubArray(array, inicio, fin){
    let subarray = array.slice(inicio, fin);
    return subarray;
}

/* METODOS
    SPLICE -> Modifica el array original, eliminando, reemplazando o agregando elementos en una posición específica.
*/

function modificarArray(array, inicio, cantidad,  ...elementos){
    array.splice(inicio, cantidad,  ...elementos);
    return array; 
}

function insertarSinEliminar(array, indice, ...elementos){
    array.splice(indice, 0, ...elementos )
    return array;
}

function reemplazarElementos(array, indice, cantidad, ...elementos){
    array.splice(indice,cantidad, ...elementos)
    return array;
}

function intercambiarElementos(array, i, j){
    let temp = array[i];  
    array[i] = array[j];  
    array[j] = temp;     
    return array;
}

function invertirArray(array){
    let arrayInvertido = [];
    for(let i = array.length - 1; i >= 0; i--){
        arrayInvertido.push(array[-i]);
    }
    return arrayInvertido;
}

function contarPalabras(frase){
    let arrayFrase = frase.split(" ");
    let cont, acum = 0;
    for(let i = 0; i < arrayFrase.length; i++ ){
        cont++;
        acum = acum + cont;
    }
    return acum;
}
