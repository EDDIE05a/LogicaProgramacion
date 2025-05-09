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

// Pide al usuario un número n y muestra la suma de todos los números del 1 al n.

fun sumaHasta(numero: Int): Int {
    var suma: Int = 0
    for(num in 1..numero step 1){
        suma += num
    }
    return suma
}

// Crea una función que reciba un texto y cuente cuántas vocales (a, e, i, o, u) contiene. Ignora mayúsculas y acentos.

fun contarVocales(texto: String): Int {
    var cont = 0
    val vocales = arrayOf("a", "e", "i", "o", "u")

    val conversionTexto = texto
        .lowercase()
        .replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")

    for (caracter in conversionTexto) {
        if (vocales.contains(caracter.toString())) {
            cont++
        }
    }

    return cont
}

// Pide una palabra o frase y muestra el texto invertido.

fun invertirCadena(cadena: String): String {
    val cadenaInvertida = mutableListOf<Char>()

    for (i in cadena.length - 1 downTo 0) {
        cadenaInvertida.add(cadena[i])
    }

    return cadenaInvertida.joinToString("")
}


// Crea una función que determine si un número es primo o no.

fun numeroPrimos(numero: Int): String {
    if (numero < 2) return "No es primo"

    var suma = 0
    var cont = 1

    while (cont <= numero) {
        if (numero % cont == 0) {
            suma++
        }
        cont++
    }

    return if (suma == 2) "Es primo" else "No es primo"
}


// Una función que determine si una palabra o frase es un palíndromo.

fun deteccionPalindromo(cadena: String): String {

    // Se limpia la cadena conviertiendola en minusculas y remplazando las vocales con acentos en vocales sin acentos    
    val cadenaLimpia = cadena
        .lowercase()
        .replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")
        .replace(" ", "")  

    // Se crea una lista mutable para guardar cada caracter de la cadena que ingreso el usuarios    
    val listaCadenaInvertida = mutableListOf<Char>()

    // Con este ciclo recorremos la cadena de derecha a izquierda
    for (i in cadenaLimpia.length - 1 downTo 0) {
        // Con este metodo añadimos cada caracter a la lista
        listaCadenaInvertida.add(cadenaLimpia[i])
    }

    // Se convierte la lista a tipo String
    val cadenaInvertida = listaCadenaInvertida.joinToString("")

    // Se aplican condicionales y se retorna
    return if (cadenaInvertida == cadenaLimpia) "Es palíndromo" else "No es palíndromo"
}