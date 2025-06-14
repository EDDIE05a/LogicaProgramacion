// TYPE 
// Crea un alias de tipo (útil para unir tipos, usar union, etc.)

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

const user1: Usuario = {
  nombre: "Lucía",
  edad: 28,
  activo: true,
};

// INTERFACE
// define la estructura de un objeto (ideal para trabajar con clases y extensibilidad)

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const producto1: Producto = {
  id: 1,
  nombre: "Camiseta",
  precio: 25,
};
