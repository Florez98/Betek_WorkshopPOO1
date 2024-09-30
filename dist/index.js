"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
// Crear instancias de Persona
const personas = [
    new persona_1.Persona('Heydi', 25),
    new persona_1.Persona("María", 25),
    new persona_1.Persona("Carlos", 28),
    new persona_1.Persona("Laura", 22),
    new persona_1.Persona("Pedro", 35),
    new persona_1.Persona("Ana", 27),
    new persona_1.Persona("Luis", 31),
    new persona_1.Persona("Sofía", 29),
    new persona_1.Persona("Fernando", 40),
    new persona_1.Persona("Clara", 24)
];
// Iterar sobre las instancias y llamar a los métodos
personas.forEach(persona => {
    persona.saludar(); // Invocar el método saludar de la instancia
    console.log(`Edad de ${persona.nombre}: ${persona.getEdad()}`); // Usar la instancia para acceder a nombre y getEdad()
});
