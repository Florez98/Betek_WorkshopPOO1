"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const persona_1 = require("./persona");
class Empleado extends persona_1.Persona {
    constructor(nombre, edad, salario, direccion, estadoCivil) {
        super(nombre, edad, direccion, estadoCivil);
        this.salario = salario;
    }
    saludar() {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()}, tu estado civil es ${this.estadoCivil} y el salario es de ${this.salario}`);
    }
    trabajar(hora) {
        console.log(`${this.nombre} trabaja ${hora} horas al día y gana un salario de ${this.salario}`);
    }
}
exports.Empleado = Empleado;
//const empleado1 = new Empleado('Saray', 25, 3000000, direccion);
//empleado1.trabajar(8);
//  empleado1.saludar();
