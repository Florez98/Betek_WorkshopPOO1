"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    Persona.prototype.saludar = function () {
        console.log("Persona: Tu nombre es ".concat(this.nombre, " y tienes ").concat(this.edad, " a\u00F1os"));
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
