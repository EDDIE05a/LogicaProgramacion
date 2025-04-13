// Crea una función sumarHasta(n) que sume todos los números desde 1 hasta n.

function sumarHasta(n){
    let acum = 0;
    let cont = 1;

    while(cont <= n){
        acum = acum + cont;        
        cont++;
    }
    return acum;
}

// Crea una función contarNegativos(array) que cuente cuántos números negativos hay en un arreglo.

function contarNegativos(array){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            cont++;
        }        
    }
    return cont;
}

// Crea una función reemplazarCeros(array, nuevoValor) que reemplace todos los ceros del arreglo por el nuevoValor.

function reemplazarCeros(array, nuevoValor){
    
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            array[i] = nuevoValor;
        }
    }
    return array;
}

// Crea una función multiplicarArray(array) que multiplique todos los elementos del arreglo y devuelva el resultadoooioo.

function multiplicarArray(array){
    let acum = 1;
    for(let i = 0; i < array.length; i++){
        acum *= array[i];
    }
    return acum;
}

// Crea una función todosMayoresQue(array, valor) que devuelva true si todos los elementos del arreglo son mayores que valor.

function todosMayoresQue(array, valor) {
    for(let i = 0; i < array.length; i++){
        if(array[i] <= valor){
            return false;
        }
    }
    return true;
}


// Crea una función todosMenoresQue(array, valor) que devuelva true si todos los elementos del array son menores que el valor dado, o false en caso contrario.

function todosMenoresQue(array, valor){
    for(let i=0; i < array.length; i++){
        if(array[i] >= valor){
            return false
        }
    }
    return true;
}

// Crea una función contarMultiplos(array, num) que cuente cuántos elementos del array son múltiplos del número num.

function contarMultiplos(array, num) {
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % num == 0){
            cont++;
        }
    }
    return cont;    
}


// Crea una función esCreciente(array) que devuelva true si los números están en orden creciente y false si no lo están.

function esCreciente(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i] + 1){
            return false;
        }
    }
    return true;
}


// Crea una función sumarPares(array) que sume los elementos que están en posiciones pares (índices 0, 2, 4, ...).

function sumarPares(array){
    
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){
            suma += array[i];
        }
    }

    return suma;
}

// Crea una función filtrarEntre(array, min, max) que devuelva un nuevo array con los elementos que están entre min y max (exclusivo).

function filtrarEntre(array, min, max){
    let arrayRango = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] > min && array[i] < max) {
            arrayRango.push(array[i]);
        }
    }
    return arrayRango;
}

// Crea una función todosMayoresQue(array, valor) que devuelva true si todos los elementos del arreglo son mayores que valor.

