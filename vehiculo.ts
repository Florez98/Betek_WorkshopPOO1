export abstract class Vehiculo{
    abstract arrancar(): void;
}


export class Coche extends Vehiculo{
    arrancar(): void {
        console.log(`El coche ha arrancado a pasos de tortuga.`);
    }
}

export class Moto extends Vehiculo{
    arrancar(): void {
        console.log(`La moto ha arrancado a pasos de león.`);
    }
}

/*
const cochee = new Coche();
cochee.arrancar();

const motoo = new Moto();
motoo.arrancar();
*/