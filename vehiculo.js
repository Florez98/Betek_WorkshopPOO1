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
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coche.prototype.arrancar = function () {
        console.log("El coche ha arrancado a pasos de tortuga.");
    };
    return Coche;
}(Vehiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.arrancar = function () {
        console.log("La moto ha arrancado a pasos de le\u00F3n.");
    };
    return Moto;
}(Vehiculo));
var cochee = new Coche();
cochee.arrancar();
var motoo = new Moto();
motoo.arrancar();
