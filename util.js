"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creaYTranformaJson = exports.jsonPersona = void 0;
var persona_1 = require("./persona");
var jsonPersona = function (objetoJson) {
    var direccion = {
        calle: objetoJson.direccion.calle,
        ciudad: objetoJson.direccion.ciudad,
        pais: objetoJson.direccion.pais
    };
    var persona = new persona_1.Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion, objetoJson.estadoCivil);
    persona.saludar();
};
exports.jsonPersona = jsonPersona;
var creaYTranformaJson = function () {
    var objetoJson = {
        nombre: "Heydi",
        edad: 20,
        direccion: {
            calle: "202 tranversal",
            ciudad: "Tachira",
            pais: "Venezuela"
        }
    };
    jsonPersona(objetoJson);
};
exports.creaYTranformaJson = creaYTranformaJson;
