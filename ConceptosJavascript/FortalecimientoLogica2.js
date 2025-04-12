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

// Crea una función multiplicarArray(array) que multiplique todos los elementos del arreglo y devuelva el resultado.

