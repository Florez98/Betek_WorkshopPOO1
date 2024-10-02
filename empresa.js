"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nombre) {
        this.empleados = [];
        this.nombre = nombre;
    }
    Empresa.prototype.agregarEmpleado = function (empleado) {
        this.empleados.push(empleado);
    };
    Empresa.prototype.eliminarEmpleado = function (empleado) {
        this.empleados = this.empleados.filter(function (e) { return e !== empleado; });
    };
    Empresa.prototype.calcularTotalSalarios = function () {
        return this.empleados.reduce(function (total, empleado) { return total + empleado.salario; }, 0);
    };
    Empresa.prototype.mostrarEmpleados = function () {
        this.empleados.forEach(function (empleado) {
            empleado.saludar();
        });
    };
    return Empresa;
}());
exports.Empresa = Empresa;
