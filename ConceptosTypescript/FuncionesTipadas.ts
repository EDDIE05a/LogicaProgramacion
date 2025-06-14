
const doubleNumber = (a: number) : number => a * 2;

function ageAndName(age: number, name: string): string {
    return `${name} tiene ${age} años`;
}

function consoleReturn(message: string): void {
    console.log(message);
}

function optionalsParameters(a: number, b?: number): number {
    return b !== undefined ? a + b : a * 2;
}