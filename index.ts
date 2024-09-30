// index.ts

import { Persona } from './persona';

// Crear instancias de Persona
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

// Iterar sobre las instancias y llamar a los métodos
personas.forEach(persona => {
    persona.saludar(); // Invocar el método saludar de la instancia
    console.log(`Edad de ${persona.nombre}: ${persona.getEdad()}`); // Usar la instancia para acceder a nombre y getEdad()
});
