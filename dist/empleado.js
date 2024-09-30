"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const persona_1 = require("./persona");
class Empleado extends persona_1.Persona {
    constructor(nombre, edad, salario) {
        super(nombre, edad);
        this.salario = salario;
    }
    trabajar(hora) {
        console.log(`${this.nombre} trabaja ${hora} horas al día y gana un salario de ${this.salario}`);
    }
}
exports.Empleado = Empleado;
const empleado1 = new Empleado('Heydi', 25, 3000000);
empleado1.trabajar(8);
