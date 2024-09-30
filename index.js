"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleados = [
    new empleado_1.Empleado('Heydi', 25, 3000000),
    new empleado_1.Empleado("María", 25, 2800000),
    new empleado_1.Empleado("Carlos", 28, 3500000),
    new empleado_1.Empleado("Laura", 22, 2700000),
    new empleado_1.Empleado("Pedro", 35, 4000000),
    new empleado_1.Empleado("Ana", 27, 2900000),
    new empleado_1.Empleado("Luis", 31, 3300000),
    new empleado_1.Empleado("Sofía", 29, 3100000),
    new empleado_1.Empleado("Fernando", 40, 4500000),
    new empleado_1.Empleado("Clara", 24, 2600000)
];
empleados.forEach(function (empleados) {
    empleados.saludar();
});
