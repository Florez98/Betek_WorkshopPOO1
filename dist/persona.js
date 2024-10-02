"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//import { EstadoCivil } from "./estadoCivil";
class Persona {
    constructor(nombre, edad, direccion, estadoCivil) {
        this.vehiculos = [];
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.estadoCivil = estadoCivil;
        this.vehiculos = [];
    }
    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
    getEdad() {
        return this.edad;
    }
    sumarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    listaVehiculo() {
        if (this.vehiculos.length === 0) {
            console.log(`${this.nombre} no tiene vehiculos.`);
            return;
        }
        console.log(`${this.nombre} tiene estos vehiculos:`);
        this.vehiculos.forEach((vehiculo) => {
            console.log(`Vehículo: ${vehiculo.constructor.name}`);
            //console.log(`Vehiculo: ${vehiculo.constructor.name}`);
        });
    }
}
exports.Persona = Persona;
