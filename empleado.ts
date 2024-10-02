import { Direccion } from "./direccion";
import { EstadoCivil } from "./estadoCivil";
import { Persona } from "./persona";
import { Proyecto } from "./proyecto";


export class Empleado extends Persona{

    salario: number;
    private proyectos: Proyecto[] = [];

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion, estadoCivil: EstadoCivil){
        super(nombre, edad, direccion, estadoCivil);
        this.salario = salario;
    }

    saludar(): void {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()}, tu estado civil es ${this.estadoCivil} y el salario es de ${this.salario}`);
    }

    trabajar(hora: number): void{
        console.log(`${this.nombre} trabaja ${hora} horas al día y gana un salario de ${this.salario}`);
    }

    agregarProyecto(proyecto: Proyecto): void {
        this.proyectos.push(proyecto);
        proyecto.agregarEmpleado(this);
    }

    eliminarProyecto(proyecto: Proyecto): void {
        this.proyectos = this.proyectos.filter(p => p !== proyecto);
        proyecto.eliminarEmpleado(this);
    }

    listarProyectos(): void {
        console.log(`Proyectos asignados a ${this.nombre}:`);
        this.proyectos.forEach(proyecto => {
            console.log(`- ${proyecto.nombre}`);
        });
    }
    

}

//const empleado1 = new Empleado('Saray', 25, 3000000, direccion);
    //empleado1.trabajar(8);
  //  empleado1.saludar();