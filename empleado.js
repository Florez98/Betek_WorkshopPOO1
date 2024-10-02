"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var persona_1 = require("./persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, salario, direccion, estadoCivil) {
        var _this = _super.call(this, nombre, edad, direccion, estadoCivil) || this;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.saludar = function () {
        console.log("Empleado: Hola ".concat(this.nombre, ", tu edad es ").concat(this.getEdad(), ", tu estado civil es ").concat(this.estadoCivil, " y el salario es de ").concat(this.salario));
    };
    Empleado.prototype.trabajar = function (hora) {
        console.log("".concat(this.nombre, " trabaja ").concat(hora, " horas al d\u00EDa y gana un salario de ").concat(this.salario));
    };
    return Empleado;
}(persona_1.Persona));
exports.Empleado = Empleado;
//const empleado1 = new Empleado('Saray', 25, 3000000, direccion);
//empleado1.trabajar(8);
//  empleado1.saludar();
