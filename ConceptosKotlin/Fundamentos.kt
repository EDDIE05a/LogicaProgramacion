fun main() {
    
}

fun tiposVariables(){
    val nombre: String = "Ferran"
    var edad: Int = 14
    println("Me llamo ${nombre} y tengo ${edad} años")
}

fun multiplicacion(numA: Int, numB: Int){
    val resultado = numA * numB
    println(resultado)
}

fun tipoNumeroCondicional(numero: Int){
    if (numero < 0) println("Negativo")
    else if (numero > 0) println("Positivo")
    else println("Es cero")
}



fun tipoNumeroWhen(numero: Int) {
    when {
        numero < 0 -> println("Negativo")
        numero > 0 -> println("Positivo")
        else -> println("Es cero")
    }
}


