import { Persona } from "./persona";

const jsonPersona = (objetoJson: any): void => {
    const direccion = {
        calle:objetoJson.direccion.calle,
        ciudad:objetoJson.direccion.ciudad,
        pais:objetoJson.direccion.pais

    };
    
    const persona = new Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion, objetoJson.estadoCivil);
    persona.saludar();
};

const creaYTranformaJson = (): void => {
    const objetoJson ={
        nombre: `Heydi`,
        edad: 20,
        direccion:{
            calle: `202 tranversal`,
            ciudad: `Tachira`,
            pais: `Venezuela`
        }
    };
    jsonPersona(objetoJson);
};

export {jsonPersona, creaYTranformaJson};