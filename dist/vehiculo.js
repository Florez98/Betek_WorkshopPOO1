"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Coche = exports.Vehiculo = void 0;
class Vehiculo {
}
exports.Vehiculo = Vehiculo;
class Coche extends Vehiculo {
    arrancar() {
        console.log(`El coche ha arrancado a pasos de tortuga.`);
    }
}
exports.Coche = Coche;
class Moto extends Vehiculo {
    arrancar() {
        console.log(`La moto ha arrancado a pasos de león.`);
    }
}
exports.Moto = Moto;
/*
const cochee = new Coche();
cochee.arrancar();

const motoo = new Moto();
motoo.arrancar();
*/ 
