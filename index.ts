import { Persona } from './persona'; // Importar la clase Persona

const personas: Persona[] = [
    new Persona("Juan", 30),
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

personas.forEach(persona => persona.saludar());
