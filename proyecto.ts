import { Empleado } from "./empleado";


export class Proyecto {
    public nombre: string;
    private descripcion: string;
    private empleados: Empleado[] = []; 

    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(empleado: Empleado): void {
        this.empleados = this.empleados.filter(e => e !== empleado);
    }

    listarEmpleados(): void {
        console.log(`Empleados en el proyecto "${this.nombre}":`);
        this.empleados.forEach(empleado => {
            console.log(`- ${empleado.nombre}`);
        });
    }

    getEmpleados(): Empleado[] {
        return this.empleados;
    }
}
