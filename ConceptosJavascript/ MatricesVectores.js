// Vector

let Vector = [1, 2, 3, 4, 5]

// Matriz

let Matriz = [
    [0, 1],
    [2, 3],
    [4, 5]
];

console.log(Matriz[1][0]); // 2 (segunda fila, primera columna)


// -----------------EJERCICIOS-----------------------------

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