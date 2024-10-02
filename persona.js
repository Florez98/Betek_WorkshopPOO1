"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//import { EstadoCivil } from "./estadoCivil";
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, direccion, estadoCivil) {
        this.vehiculos = [];
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.estadoCivil = estadoCivil;
        this.vehiculos = [];
    }
    Persona.prototype.saludar = function () {
        console.log("Persona: Tu nombre es ".concat(this.nombre, " y tienes ").concat(this.edad, " a\u00F1os"));
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.sumarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    Persona.prototype.listaVehiculo = function () {
        if (this.vehiculos.length === 0) {
            console.log("".concat(this.nombre, " no tiene vehiculos."));
            return;
        }
        console.log("".concat(this.nombre, " tiene estos vehiculos:"));
        this.vehiculos.forEach(function (vehiculo) {
            console.log("Veh\u00EDculo: ".concat(vehiculo.constructor.name));
            //console.log(`Vehiculo: ${vehiculo.constructor.name}`);
        });
    };
    return Persona;
}());
exports.Persona = Persona;
