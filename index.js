"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona"); // Importar la clase Persona
var personas = [
    new persona_1.Persona("Juan", 30),
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
personas.forEach(function (persona) { return persona.saludar(); });
