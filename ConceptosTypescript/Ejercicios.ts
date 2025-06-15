// Crea una función que reciba un arreglo de strings y devuelva cuántos elementos tiene.

function numberOfElements(array: string[]): string {
    let cont: number = 0;
    for(const element of array){
        cont++;
    }
    return `El arreglo tiene ${cont} elementos`;
}

function numberOfElements(array: string[]): string {
    return `El arreglo tiene ${array.length} elementos`;
}


// Crea una función que reciba un arreglo de palabras y una palabra clave.+

function searchKeyword(array: string[], keyword: string ): boolean {
    for(const element of array){
        if(element.toLocaleLowerCase() == keyword.toLocaleLowerCase()){
            return true
        } 
    }
    return false
}


// Recibe un arreglo de edades (números).
// Devuelve solo los que sean mayores o iguales a 18.


function overOrEqualEigthteen(array: number[]): number[] {
    let newArray: number[] = []; 
    for(const element of array){
        if(element >= 18){
            newArray.push(element)
        }
    }
    return newArray
}


// Crea una función que reciba un arreglo de números y devuelva la suma total.

function sumArray(array: number[]): number {
    let sum: number = 0;
    for(const element of array){
        sum += element;
    }
    return sum;
}