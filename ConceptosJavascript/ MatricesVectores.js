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



