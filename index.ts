/*import { Persona } from './persona';

const personas = [
    new Persona('Heydi', 25),
    new Persona("María", 25),
    new Persona("Carlos", 28),
    new Persona("Laura", 22),
    new Persona("Pedro", 35),
    new Persona("Ana", 27),
    new Persona("Luis", 31),
    new Persona("Sofía", 29),
    new Persona("Fernando", 40),
    new Persona("Clara", 24)
];

personas.forEach(persona => {
    persona.saludar(); 
    console.log(`Edad de ${persona.nombre}: ${persona.getEdad()}`);
});*/

import { Empleado } from './empleado';

const empleados = [
    new Empleado('Heydi', 25, 3000000),
    new Empleado("María", 25, 2800000),
    new Empleado("Carlos", 28, 3500000),
    new Empleado("Laura", 22, 2700000),
    new Empleado("Pedro", 35, 4000000),
    new Empleado("Ana", 27, 2900000),
    new Empleado("Luis", 31, 3300000),
    new Empleado("Sofía", 29, 3100000),
    new Empleado("Fernando", 40, 4500000),
    new Empleado("Clara", 24, 2600000)
];


empleados.forEach(empleados => {
    empleados.saludar(); 
});