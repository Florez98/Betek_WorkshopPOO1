import { Direccion } from "./direccion";
import { Coche, Vehiculo } from "./vehiculo";

export class Persona {
  
  nombre: string;
  private edad: number;
  direccion: Direccion;
  vehiculos: Vehiculo[] = [];

  constructor(nombre: string, edad: number, direccion: Direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    //this.vehiculos = [];
  }

  saludar(): void {
    console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
  }

  getEdad(): number {
    return this.edad;
  }

  sumarVehiculo(vehiculo: Vehiculo): void{
    this.vehiculos.push(vehiculo);
  }

  listaVehiculo(): void {
    if (this.vehiculos.length === 0){
      console.log(`${this.nombre} no tiene vehiculos.`);
      return;
    } 
      console.log(`${this.nombre} tiene estos vehiculos:`);
      this.vehiculos.forEach((vehiculo) => {
      console.log(`Vehículo: ${(vehiculo.constructor as any).name}`);
      //console.log(`Vehiculo: ${vehiculo.constructor.name}`);
    });

  }

  
}


