class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    const generaciones = {
      "Generación Z": "nativos digitales, crecieron con internet y la tecnología móvil.",
      "Millennials": "conectados a la tecnología, valoran la diversidad y la sostenibilidad.",
      "Generación X": "adaptabilidad al cambio, independencia y equilibrio entre vida laboral y personal.",
      "Baby Boomers": "trabajo duro, compromiso y respeto a la autoridad."
    };

    const generacion = "";
    if (this.anioNacimiento >= 1997) {
      generacion = "Generación Z";
    } else if (this.anioNacimiento >= 1981) {
      generacion = "Millennials";
    } else if (this.anioNacimiento >= 1965) {
      generacion = "Generación X";
    } else {
      generacion = "Baby Boomers";
    }

    return `La persona pertenece a la ${generacion} y su rasgo característico es ${generaciones[generacion]}.`;
  }

  esMayorDeEdad() {
    return this.edad >= 18 ? "La persona es mayor de edad." : "La persona es menor de edad.";
    
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de Nacimiento: ${this.anioNacimiento}`;
  
  }
}
// Función para crear una instancia de Persona con los datos del formulario
function crearPersona() {
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const DNI = document.getElementById('DNI').value;
  const sexo = document.getElementById('sexo').value;
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

  // Crear una nueva instancia de Persona
  const persona = new Persona(nombre, edad, DNI, sexo, peso, altura, anioNacimiento);
  alert('Persona creada: ' + persona.mostrarDatos());
}

// Función para llamar al método mostrarGeneracion y mostrar el resultado en un alert
function mostrarGeneracion() {
  // Obtener la instancia de Persona (puedes obtenerla de alguna manera, por ejemplo, guardándola en una variable global al crearla)
  // Llamar al método mostrarGeneracion y mostrar el resultado en un alert
}

// Función para llamar al método esMayorDeEdad y mostrar el resultado en un alert
function esMayorDeEdad() {
  // Obtener la instancia de Persona
  // Llamar al método esMayorDeEdad y mostrar el resultado en un alert
}
