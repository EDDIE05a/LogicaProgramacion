// Declaracion de variables 

let nombre: string = "Juan";
let edad: number = 30;
let activo: boolean = true;


// Declaracion de arrays

let frutas: string[] = ["manzana", "banana"];
let edades: number[] = [25, 30, 35];


// Declaracion de tuplas

let persona: [string, number] = ["Ana", 28];


// Declaracion de funciones

function sumar(a: number, b: number): number {
  return a + b;
}

// Declaracion funciones tipo flecha

const multiplicar = (x: number, y: number): number => x * y;

// Declaracion de funciones con parametros opcionales

function saludarUsuario(nombre?: string): string {
  return nombre ? `Hola, ${nombre}` : "Hola, visitante";
}
