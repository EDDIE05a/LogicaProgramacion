// Vector

let Vector = [1, 2, 3, 4, 5]

// Matriz

let Matriz = [
    [0, 1],
    [2, 3],
    [4, 5]
];

console.log(Matriz[1][0]); // 2 (segunda fila, primera columna)


// ----------------- EJERCICIOS MATRICES CON FOR -----------------------------

// Crea una función sumarVector(vector) que reciba un array y retorne la suma de todos sus elementos.

function sumarVector(vector){
    let suma = 0;
    vector.forEach(elemento => {
        suma += elemento;
    });

    return suma;
}
  
// Crea una función contarCeros(matriz) que recorra una matriz y cuente cuántos ceros contiene.

function contarCeros(matriz) {
    let contador = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            if (matriz[fila][columna] === 0) {
                contador++;
            }
        }
    }
    return contador;
}


// Crea una función contarNegativos(matriz) que reciba una matriz y cuente cuántos números negativos contiene.


function contarNegativos(matriz){
    let cont = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] < 0){
                cont++;
            }
        }
    }
    return cont;
}


// Crea una función contarPares(matriz) que reciba una matriz y cuente todos los números pares.

function contarPares(matriz){
    let cont = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 2 == 0){
                cont++;
            }
        }
    }
    return cont;
}

// Crea una función sumarMatriz(matriz) que reciba una matriz y devuelva la suma de todos sus elementos.

function sumarMatriz(matriz){
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j];
        }
    }
    return suma;
}

// Crea una función mayorEnMatriz(matriz) que devuelva el número más alto encontrado en la matriz.

function mayorEnMatriz(matriz){
    let numMayor = matriz[0][0];
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > numMayor){
                numMayor = matriz[i][j];
            }
        }
    }
    return numMayor;
}

// Crea una función copiarMatriz(matriz) que devuelva una nueva matriz idéntica sin modificar la original.

// function copiarMatriz(matriz){
//     let nuevaMatriz = [];

//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             nuevaMatriz.push(matriz[i][j]);
//         }
//     }
//     return nuevaMatriz;
// }

// Crea una función que reciba una matriz y muestre todos los números que contiene, uno por uno.

function impresionFor(matriz){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            console.log(matriz[i][j]);
        }
    }
}

function impresionForEach(matriz){
    matriz.forEach((fila) => {
        // Recorremos cada columna de la fila
        fila.forEach((valor) => {
          console.log(valor);
        });
    });
}



// Crea una función que cuente cuántos números hay en total dentro de una matriz.

function totalNumerosFor(matriz){
    let cont = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            cont++;
        }
    }
    return cont; 
}

function totalNumerosForEach(matriz){
    let cont = 0;
    matriz.forEach((fila) => {
        fila.forEach((valor) => {
            cont++;
        })
    })
    return cont;
}


// Crea una función que devuelva una nueva matriz con los mismos valores, sin modificar la original.

function copiaMatrizFor(matriz){
    let nuevaMatriz = [];
    for(let i = 0; i < matriz.length; i++){
        let filaCopiada = matriz[i].slice(); // ← copia cada fila
        nuevaMatriz.push(filaCopiada);       // ← la agrega a la nueva matriz
    }
    return nuevaMatriz;
}

function copiarMatrizForEach(matriz){
    let nuevaMatriz = [];
    matriz.forEach((fila) => 
        {
            let filaCopiada = fila.slice(); 
            nuevaMatriz.push(filaCopiada);  
        }
    )
    return nuevaMatriz;
}


// Crea una función que reciba una matriz y devuelva la suma de todos sus elementos.

function sumarMatrizFor(matriz){
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j];
        }
    }
    return suma;
}

function sumarMatrizForEach(matriz){
    let suma = 0;
    matriz.forEach((fila) => {
        fila.forEach((columna) =>{
            suma += columna;
        })
    })
    return suma;
}


// Crea una función invertirVector(vector) que reciba un array (vector) y devuelva uno nuevo con los elementos en orden inverso.

function invertirVector(vector){
    let newArray = [];
    for(let i = vector.length - 1; i >= 0; i--){
        newArray.push(vector[i]);
    }
    return newArray;
}

// Crea una función sumaFilas(matriz) que reciba una matriz y devuelva un array con la suma de cada fila.

function sumaFilas(matriz){
    let newArray = [];
    for(let i = 0; i < matriz.length; i++){
        let suma = 0;
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j];
        }
        newArray.push(suma);
    }
    return newArray;
}

// Crea una función encontrarNumero(matriz, num) que devuelva true si el número está en la matriz y false si no está.

function encontrarNumero(matriz, num){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(num == matriz[i][j]){
                return true;
            }
        }
    }
    return false;
}

// Crea una función sumaColumnas(matriz) que devuelva un array con la suma de cada columna de la matriz.

function sumaColumnas(matriz){
    let newArray = [];
    for(let j = 0; i < matriz[0].length; j++){
        let suma = 0;
        for(let i = 0; i < matriz.length; i++){
            suma += matriz[j][i];
        }
        newArray.push(suma);
    }
    return newArray;
}


// Crea una función que devuelva un nuevo array donde cada elemento representa la cantidad de números pares que hay en cada fila de la matriz.

function paresPorFila(matriz){

    let newArray = [];

    for(let i = 0; i < matriz.length; i++){
        let cont = 0;
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 2 === 0){
                cont++;
            }
        }
        newArray.push(cont);
    }
    return newArray;
}

// Crea una función que reciba una matriz de números y devuelva un nuevo array donde cada elemento sea el mayor número encontrado en cada fila de la matriz.

function mayorPorFila(matriz){
    let nuevoArray = [];
    for(let i = 0; i < matriz.length; i++){
        let indice = [i][0];
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > indice){
                indice = matriz[i][j];
            }
        }
        nuevoArray.push(indice);
    }
    return nuevoArray;
}
 

// Crea una función que reciba una matriz de números (positivos y negativos) y devuelva una nueva matriz donde todos los números negativos sean reemplazados por 0. Los números positivos deben quedar igual.

function matrizSinNegativos(matriz) {
    let nuevaMatriz = [];

    for (let i = 0; i < matriz.length; i++) {
        let nuevaFila = [];

        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                nuevaFila.push(0);
            } else {
                nuevaFila.push(matriz[i][j]);
            }
        }

        nuevaMatriz.push(nuevaFila);
    }

    return nuevaMatriz;
}

// Crea una función que reciba una matriz cuadrada (mismo número de filas que de columnas) y devuelva una nueva matriz donde:
// Los elementos que están en la diagonal principal sean reemplazados por el número 0.
// Todos los demás elementos se mantengan igual.

function matrizDiagonalesCero(matriz) {
    let nuevaMatriz = [];
    for (let fila = 0; fila < matriz.length; fila++) {
        let nuevaFila = [];
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            if (fila === columna) { 
                nuevaFila.push(0);
            } else {
                nuevaFila.push(matriz[fila][columna]);
            }
        }
        nuevaMatriz.push(nuevaFila);
    }
    return nuevaMatriz;
}



