"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nombre) {
        this.empleados = [];
        this.nombre = nombre;
    }
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
    eliminarEmpleado(empleado) {
        this.empleados = this.empleados.filter(e => e !== empleado);
    }
    calcularTotalSalarios() {
        return this.empleados.reduce((total, empleado) => total + empleado.salario, 0);
    }
    mostrarEmpleados() {
        this.empleados.forEach(empleado => {
            empleado.saludar();
        });
    }
}
exports.Empresa = Empresa;
