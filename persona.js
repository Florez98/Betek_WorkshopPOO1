"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Persona: Tu nombre es ".concat(this.nombre, " y tienes ").concat(this.edad, " a\u00F1os"));
    };
    return Persona;
}());
exports.Persona = Persona;
//const personas = [
//  new Persona('Heydi', 25)
//];
//personas.forEach(persona => persona.saludar());
