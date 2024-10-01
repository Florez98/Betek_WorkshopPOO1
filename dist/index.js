"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const empleado_1 = require("./empleado");
const util_1 = require("./util");
const direccion = [
    { calle: 'Calle 1', ciudad: 'Bogotá', pais: 'Colombia' },
    { calle: 'Calle 2', ciudad: 'Medellín', pais: 'Colombia' },
    { calle: 'Calle 3', ciudad: 'Cali', pais: 'Colombia' },
    { calle: 'Calle 4', ciudad: 'Barranquilla', pais: 'Colombia' },
    { calle: 'Calle 5', ciudad: 'Cartagena', pais: 'Colombia' },
    { calle: 'Calle 6', ciudad: 'Bucaramanga', pais: 'Colombia' },
    { calle: 'Calle 7', ciudad: 'Pereira', pais: 'Colombia' },
    { calle: 'Calle 8', ciudad: 'Santa Marta', pais: 'Colombia' },
    { calle: 'Calle 9', ciudad: 'Cúcuta', pais: 'Colombia' },
    { calle: 'Calle 10', ciudad: 'Manizales', pais: 'Colombia' },
];
const personas = [
    new persona_1.Persona('Heydi', 25, direccion[0]),
    new persona_1.Persona("María", 25, direccion[1]),
    new persona_1.Persona("Carlos", 28, direccion[2]),
    new persona_1.Persona("Laura", 22, direccion[3]),
    new persona_1.Persona("Pedro", 35, direccion[4]),
    new persona_1.Persona("Ana", 27, direccion[5]),
    new persona_1.Persona("Luis", 31, direccion[6]),
    new persona_1.Persona("Sofía", 29, direccion[7]),
    new persona_1.Persona("Fernando", 40, direccion[8]),
    new persona_1.Persona("Clara", 24, direccion[9])
];
/*personas.forEach(persona => {
    persona.saludar();
    console.log(`Edad de ${persona.nombre}: ${persona.getEdad()}`);
    console.log(`Ciudad: ${persona.direccion.ciudad}`);
});
*/
const empleados = [
    new empleado_1.Empleado('Heydi', 25, 3000000, direccion[0]),
    new empleado_1.Empleado("María", 25, 2800000, direccion[1]),
    new empleado_1.Empleado("Carlos", 28, 3500000, direccion[2]),
    new empleado_1.Empleado("Laura", 22, 2700000, direccion[3]),
    new empleado_1.Empleado("Pedro", 35, 4000000, direccion[4]),
    new empleado_1.Empleado("Ana", 27, 2900000, direccion[5]),
    new empleado_1.Empleado("Luis", 31, 3300000, direccion[6]),
    new empleado_1.Empleado("Sofía", 29, 3100000, direccion[7]),
    new empleado_1.Empleado("Fernando", 40, 4500000, direccion[8]),
    new empleado_1.Empleado("Clara", 24, 2600000, direccion[9])
];
/*empleados.forEach(empleados => {
    empleados.saludar();
    console.log(`Ciudad: ${empleados.direccion.ciudad}`)
});
*/
(0, util_1.creaYTranformaJson)();
