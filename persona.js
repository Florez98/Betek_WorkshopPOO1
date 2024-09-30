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
var personas = [
    new Persona('Heydi', 25)
];
personas.forEach(function (persona) { return persona.saludar(); });
