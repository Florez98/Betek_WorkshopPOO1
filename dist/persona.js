"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
    getEdad() {
        return this.edad;
    }
}
exports.Persona = Persona;
