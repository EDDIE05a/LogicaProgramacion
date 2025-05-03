// Imprime en consola los números del 1 al 10, uno por línea.

fun impresionNumeros(){
    for(i in 1..10){
        println(i)
    }
}

// Imprime en consola los números del 10 al 1 en orden descendente.

fun impresionNumerosRevez(){
    for(i in 10 downTo 1){
        println(i)

    }
}

// Suma de los primeros 10 números naturales

fun sumaNumeros(): Int{
    var suma: Int = 0
    for(i in 1..10){
        suma += i
    }
    return suma
}

// Contar cuántos números pares hay del 1 al 100

fun contarPares(): Int{
    var cont: Int = 0;   
    for(i in 1..100){
        if(i % 2 == 0){
            cont++
            println(i)
        }
    }
    return cont
}

// Pide al usuario que ingrese números uno por uno, y termina cuando escriba 0.

fun hastaCero() {
    var numero: Int
    do {
        print("Ingrese un número: ")
        numero = readLine()!!.toInt()
    } while (numero != 0)
}


// Pide al usuario un número del 1 al 10 y muestra su tabla de multiplicar.

fun tablaMultiplicar(){
    println("Ingrese un numero")
    var numero = readLine()!!.toInt()
    
    for(i in 1..10){
        var resultado = numero * i
        println("${numero} X ${i} = ${resultado}")
    }
}

// Pide al usuario un número y muestra cuántos dígitos tiene.

fun contarDigitosPorCadena() {
    print("Ingresa un número: ")
    val entrada = readLine().orEmpty()                
    println("Tu número tiene ${digitos.length} dígitos")
}


// Imprime todos los múltiplos de 3 entre 1 y 100.

fun multiplosTres() {
    // Con step
    for(i in 3..100 step 3){
        println(i)
    }
    // Con condicion
    for(j in 1..100){
        if(j % 3 == 0){
            println(j)
        }
    }
}




