"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creaYTranformaJson = exports.jsonPersona = void 0;
const persona_1 = require("./persona");
const jsonPersona = (objetoJson) => {
    const direccion = {
        calle: objetoJson.direccion.calle,
        ciudad: objetoJson.direccion.ciudad,
        pais: objetoJson.direccion.pais
    };
    const persona = new persona_1.Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion);
    persona.saludar();
};
exports.jsonPersona = jsonPersona;
const creaYTranformaJson = () => {
    const objetoJson = {
        nombre: `Heydi`,
        edad: 20,
        direccion: {
            calle: `202 tranversal`,
            ciudad: `Tachira`,
            pais: `Venezuela`
        }
    };
    jsonPersona(objetoJson);
};
exports.creaYTranformaJson = creaYTranformaJson;
