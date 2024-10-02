"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
var Proyecto = /** @class */ (function () {
    function Proyecto(nombre, descripcion) {
        this.empleados = [];
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    Proyecto.prototype.agregarEmpleado = function (empleado) {
        this.empleados.push(empleado);
    };
    Proyecto.prototype.eliminarEmpleado = function (empleado) {
        this.empleados = this.empleados.filter(function (e) { return e !== empleado; });
    };
    Proyecto.prototype.listarEmpleados = function () {
        console.log("Empleados en el proyecto \"".concat(this.nombre, "\":"));
        this.empleados.forEach(function (empleado) {
            console.log("- ".concat(empleado.nombre));
        });
    };
    Proyecto.prototype.getEmpleados = function () {
        return this.empleados;
    };
    return Proyecto;
}());
exports.Proyecto = Proyecto;
