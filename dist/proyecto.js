"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
class Proyecto {
    constructor(nombre, descripcion) {
        this.empleados = [];
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
    eliminarEmpleado(empleado) {
        this.empleados = this.empleados.filter(e => e !== empleado);
    }
    listarEmpleados() {
        console.log(`Empleados en el proyecto "${this.nombre}":`);
        this.empleados.forEach(empleado => {
            console.log(`- ${empleado.nombre}`);
        });
    }
    getEmpleados() {
        return this.empleados;
    }
}
exports.Proyecto = Proyecto;
