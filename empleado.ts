import { Persona } from "./persona";

export class Empleado extends Persona{

    salario: number;

    constructor(nombre: string, edad: number, salario: number){
        super(nombre, edad);
        this.salario = salario;
    }

    trabajar(hora: number): void{
        console.log(`${this.nombre} trabaja ${hora} horas al día y gana un salario de ${this.salario}`);
    }

}

const empleado1 = new Empleado('Heydi', 25, 3000000);
    empleado1.trabajar(8);