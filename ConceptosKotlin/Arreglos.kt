// ----------------------- EJERCICIOS CON ARREGLOS, CICLOS Y CONDICIONALES ---------------------------


// Crea una función que reciba un arreglo de enteros y retorne cuántos números pares contiene.

fun evenInArrray(array: Array<Int>): Int{
    var count: Int = 0;
    for(number in array){
        if(number % 2 == 0) count++
    }
    return count
}

// Dado un arreglo de enteros y un número limite, retorna la suma de todos los elementos del arreglo que sean mayores que limite.

fun majorItems(array: Array<Int>, limit: Int): Int{    
    var sum: Int = 0;
    for(number in array){
        if(number > limit) sum += number
    }
    return sum
}

// Crea una función que reciba un arreglo de enteros y retorne el número más pequeño sin usar funciones como min().

fun smallerNumber(array: Array<Int>): Int{
    var initialValue = array[0]
    for(number in array){
        if(initialValue > number){
            initialValue = number
        }
    }
    return initialValue
}

// Escribe una función que reciba un arreglo de enteros y retorne uno nuevo con todos los números negativos eliminados.

fun negativeArray(array: Array<Int>): Array<Int> {
    val newArray = mutableListOf<Int>()
    for (number in array) {
        if (number >= 0) {
            newArray.add(number)
        }
    }
    return newArray.toTypedArray()
}

// Crea una función que reciba un arreglo de enteros y devuelva true si hay elementos duplicados, y false si todos los elementos son únicos.

fun hasDuplicates(array: Array<Int>): Boolean {
    val seen = mutableSetOf<Int>()
    for (number in array) {
        if (number in seen) {
            return true
        }
        seen.add(number)
    }
    return false
}


// Crea una función que reciba un arreglo de enteros y un valor a buscar. Devuelve true si el valor está presente, y false si no.

fun numberSearch(array: Array<Int>, number: Int): Boolean{
    for(i in array){
        if(i == number) return true
    }
    return false
}

// Crea una función que multiplique todos los elementos de un arreglo de enteros y devuelva el resultado. Si el arreglo está vacío, devuelve 1.

fun multiplicationArray(array: Array<Int>): Int {
    if (array.isEmpty()) return 1
    var result = 1
    for (number in array) {
        result *= number
    }
    return result
}

// Dado un arreglo de enteros, calcula el promedio y devuelve cuántos elementos son mayores que ese promedio.

fun numbersGreaterAverage (array: Array<Int>): Int{
    var sum: Int = 0
    var count: Int = 0

    for(number in array){
        sum += number 
    }
    
    val average = sum.toDouble() / array.size

    for(number in array){
        if(number > average) count++
    }
    return count
}

// Crea una función que reciba un arreglo de enteros y devuelva true si los elementos están en orden ascendente, o false en caso contrario.

fun arregloAscendente(arreglo: Array<Int>): Boolean {
    var anterior = arreglo[0]
    for (i in 1 until arreglo.size) {
        if (arreglo[i] < anterior) return false
        anterior = arreglo[i]
    }
    return true
}


// Escribe una función que reciba un arreglo de enteros y retorne un nuevo arreglo con los elementos en orden inverso.

fun arregloInverso(arreglo: Array<Int>): Array<Int> {
    val nuevoArreglo = mutableListOf<Int>()

    for (i in arreglo.lastIndex downTo 0) {
        nuevoArreglo.add(arreglo[i]) 
    }

    return nuevoArreglo.toTypedArray()  
}


// Crea una función que reciba un arreglo de enteros y retorne true si el arreglo es igual leído de izquierda a derecha y de derecha a izquierda.

fun arregloPalindromo(array: Array<Int>): Boolean {
    val nuevoArreglo = mutableListOf<Int>()
    for (i in array.lastIndex downTo 0) {
        nuevoArreglo.add(array[i])
    }

    val arrayInverso = nuevoArreglo.toTypedArray()

    return arrayInverso.contentEquals(array)
}

