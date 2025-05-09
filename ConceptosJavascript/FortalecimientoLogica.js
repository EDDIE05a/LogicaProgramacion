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

function contarMayores(array, limite){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > limite){
            cont++;
        }
    }
    return cont;
}

// EJERCICIO D
// Implementa indiceNumeroMayor(array), que devuelva la posición (índice) del número más grande en el array.

function indiceNumeroMayor(array) {
    let mayor = array[0], indice = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
            indice = i;
        }
    }
    return indice;
}


// EJERCICIO E
// Crea invertirArray(array), que devuelva un nuevo array con los elementos en orden inverso.

function invertirArray(array){
    let arrayInvertido = [];
    for(let i = array.length - 1; i >= 0; i--){
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

// EJERCICIO F
// Crea una función segundoMayor(array) que devuelva el segundo número más grande de un array de números.
// MALA

function segundoMayor(array){

    let mayor = array[0];
    let arrayPenultimo = [];
    let segunmayor = arrayPenultimo[0];
    
    for(let i = 1; i < array.length; i++ ){
        if(array[i] > mayor){
           mayor = array[i]; 
        }
        else{
            arrayPenultimo.push(array[i]);
        }
    }

    for(let a = 1; a < arrayPenultimo.length; a++){
        if(array[a] > segunmayor){
            segunmayor = array[a]; 
         }
    }
    return segunmayor;
}

// EJERCICIO G
// Crea una función calcularPromedio(array) que reciba un array de números y devuelva el promedio de sus valores.

function calcularPromedio(array){
    let suma = 0;
    let prom = 0;
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        cont++;
        suma += array[i];
    }
    prom = suma/cont;
    return prom;
}


// EJERCICIO H 
// Escribe una función productoTotal(array) que multiplique todos los números del array y devuelva el resultado.

function productoTotal(array){
    let multiplicacion = 1;

    for(let i = 0; i < array.length; i++){
        multiplicacion *= array[i];
    }

    return multiplicacion;
}

// EJERCICIO I
// Crea una función filtrarPrimos(array) que devuelva un nuevo array con solo los números primos del array original.

function filtrarPrimos(array){
    let arrayPrimos = [];

    for(let i = 0; i < array.length; i++){
        let cont = 1;
        let acum = 0;
        while(cont <= array[i]){
            if(array[i] % cont == 0){
                acum ++;
            }
            cont++;
        }
        if(acum == 2){
            arrayPrimos.push(array[i]);
        }
        
    }
    return arrayPrimos;
}

// EJERCICIO J
// Escribe contarOcurrencias(array, num), que cuente cuántas veces aparece un número num en el array.


function contarOcurrencias(array, num){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == num){
            cont++;
        }
    }
    return cont;
}

// EJERCICIO K
// Crea una función primerPar(array) que devuelva el primer número par encontrado en el array. Si no hay números pares, devuelve null.

function primerPar(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            return array[i];
        }
    }
    return null;
}

// EJERCICIO L
// Crea una función existeNumero(array, num) que devuelva true si el número está en el array y false si no lo está.

function existeNumeroFor(array, num){
    for(let i = 0; i < array.length; i++){
        if(array[i] == num){
            return true;
        }
    }
    return false;
}

function existeNumeroForEach(array, num){
    array.forEach(element => {
        
    });
}

// EJERCICIO M 
// Crea una funcion numMayor(array) que devuelva el numero mas alto en un array.

function numMayor(array){
    let numero = array[0];
    for (let index = 1; index < array.length; index++) {
        if(array[index] > numero){
            numero = array[index] ;
        } 
    }
    return numero;
}

// EJERCICIO N
// Crea un funcion cree una piramide con el caracter que ingrese el usuario.

function piramideCaracter(caracter){
    for(let i = 0; i < 5; i++){
        console.log(caracter);
    }
}