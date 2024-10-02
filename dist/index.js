"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = require("./empleado");
const empresa_1 = require("./empresa");
const fs = __importStar(require("fs"));
const data = fs.readFileSync('empleados.json', 'utf-8');
const empleadosJSON = JSON.parse(data);
if (Array.isArray(empleadosJSON)) {
    const empleados = empleadosJSON.map((empleadoData) => {
        const direccion = {
            calle: empleadoData.direccion.calle,
            ciudad: empleadoData.direccion.ciudad,
            pais: empleadoData.direccion.pais
        };
        const estadoCivil = empleadoData.estadoCivil;
        return new empleado_1.Empleado(empleadoData.nombre, empleadoData.edad, empleadoData.salario, direccion, estadoCivil);
    });
    const empresa = new empresa_1.Empresa('Mi Empresa');
    empleados.forEach((empleado) => {
        empresa.agregarEmpleado(empleado);
    });
    console.log(`Total de salarios de la empresa: ${empresa.calcularTotalSalarios()}`);
    /*empleados.forEach((empleado: Empleado) => {
        empleado.saludar();
        console.log(`Ciudad: ${empleado.direccion.ciudad}`);
    });
} else {
    console.error("El contenido del archivo JSON no es un arreglo.");*/
}
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
/*const personas = [
    new Persona('Heydi', 25, direccion[0]),
    new Persona("María", 25, direccion[1]),
    new Persona("Carlos", 28, direccion[2]),
    new Persona("Laura", 22, direccion[3]),
    new Persona("Pedro", 35, direccion[4]),
    new Persona("Ana", 27, direccion[5]),
    new Persona("Luis", 31, direccion[6]),
    new Persona("Sofía", 29, direccion[7]),
    new Persona("Fernando", 40, direccion[8]),
    new Persona("Clara", 24, direccion[9])
];


personas.forEach(persona => {
    persona.saludar();
    console.log(`Edad de ${persona.nombre}: ${persona.getEdad()}`);
    console.log(`Ciudad: ${persona.direccion.ciudad}`);
});


const empleados = [
    new Empleado('Heydi', 25, 3000000, direccion[0]),
    new Empleado("María", 25, 2800000, direccion[1]),
    new Empleado("Carlos", 28, 3500000, direccion[2]),
    new Empleado("Laura", 22, 2700000, direccion[3]),
    new Empleado("Pedro", 35, 4000000, direccion[4]),
    new Empleado("Ana", 27, 2900000, direccion[5]),
    new Empleado("Luis", 31, 3300000, direccion[6]),
    new Empleado("Sofía", 29, 3100000, direccion[7]),
    new Empleado("Fernando", 40, 4500000, direccion[8]),
    new Empleado("Clara", 24, 2600000, direccion[9])
];

empleados.forEach(empleados => {
    empleados.saludar();
    console.log(`Ciudad: ${empleados.direccion.ciudad}`)
});

creaYTranformaJson();


const coche = new Coche();
const moto = new Moto();


const persona1 = personas[0];

persona1.sumarVehiculo(coche);
persona1.sumarVehiculo(moto);

persona1.listaVehiculo();

persona1.vehiculos.forEach(vehiculo => vehiculo.arrancar());
*/
