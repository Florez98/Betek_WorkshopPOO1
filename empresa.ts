import { Empleado } from './empleado'

export class Empresa {
    private nombre: string;
    private empleados: Empleado[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(empleado: Empleado): void {
        this.empleados = this.empleados.filter(e => e !== empleado);
    }

    calcularTotalSalarios(): number {
        return this.empleados.reduce((total, empleado) => total + empleado.salario, 0);
    }

    mostrarEmpleados(): void {
        this.empleados.forEach(empleado => {
            empleado.saludar();
        });
    }
}