class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
  }
}

const personas = [
  new Persona('Heydi', 25)
];

personas.forEach(persona => persona.saludar());
