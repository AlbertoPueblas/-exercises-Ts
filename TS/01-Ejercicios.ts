//////////////////////////////////////////////
// // TypeScript (POO)
//////////////////////////////////////////////

//--------------------------------------------

// Haz una clase llamada Persona que siga las siguientes condiciones:
// ● Sus atributos son nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
// ● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0
// números, cadena vacía para String, etc). Sexo será hombre por defecto, usa una constante para
// ello.
// ● Instancia al menos tres objetos.

class Persona {

    static sexoDefecto = 'H';

    nombre: String;
    edad: number;
    dni: number;
    sexo: string;
    peso: number;
    altura: number;

    constructor(nombre: string = '', edad: number = 0, dni: number = 0, sexo: string = Persona.sexoDefecto, peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    mostrarInformacion() { 
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Dni: ${this.dni}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} Kg`);
        console.log(`Altura: ${this.altura} cm`);
        console.log(`---------------------------`);
        
     }
}
let persona1 = new Persona('Ana', 30, 949383292, 'Mujer', 65, 1.65);
let persona2 = new Persona('Luis', 25, 12345678, 'Hombre', 75, 1.80);
let persona3 = new Persona('María', 28, 87654321, 'Mujer', 60, 1.70);

persona1.mostrarInformacion();
persona2.mostrarInformacion();
persona3.mostrarInformacion();



//--------------------------------------------

// Haz una clase llamada Password que siga las siguientes condiciones:
// ● Que tenga los atributos longitud y contraseña Por defecto, la longitud será de 8.
// ● Los constructores serán los siguientes:
// Incluye el método que genere una contraseña aleatoria con esa longitud.

//--------------------------------------------

// Crearemos una superclase llamada Electrodoméstico con las siguientes características:
// ● Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. Indica
// que se podrán heredar.
// ● Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el
// peso de 5 kg. Usa constantes para ello.
// ● Los colores disponibles son blanco, negro, rojo, azul y gris No importa si el nombre está en
// mayúsculas o en minúsculas.

//--------------------------------------------

// Los métodos que implementará serán:
// ● Métodos get de todos los atributos.
// ● comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta, sino es
// correcta usará la letra por defecto Se invocará al crear el objeto y no será visible.
// ● comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el color por
// defecto Se invocará al crear el objeto y no será visible.
// ● precioFinal(): según el consumo energético, aumentará su precio, y según su tamaño, también.

//--------------------------------------------
//--------------------------------------------

// // Crearemos una superclase llamada Electrodoméstico con las siguientes características:
// // • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// // peso. Indica que se podrán heredar.
// // • Por defecto, el color será blanco, el consumo energético será F, el precio Base es de
// // 100 € y el peso de 5 kg. Usa constantes para ello.
// // • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre
// // está en mayúsculas o en minúsculas.

// //--------------------------------------------

// // Los métodos que implementara serán:
// // • Métodos get de todos los atributos.
// // • comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta, sino
// // es correcta usara la letra por defecto. Se invocara al crear el objeto y no será visible.
// // • comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el
// // color por defecto. Se invocara al crear el objeto y no será visible.
// // • precioFinal(): según el consumo energético, aumentara su precio, y según su
// // tamaño, también.

// // Esta es la lista de precios:
// // letra:      precios:                                 Tamaño:                Precio:
// // A           100€                                      Entre  0 y 19 kg         10€
// // B            80€                                      Entre 20 y 49 kg         50€
// // C            60€                                      Entre 50 y 79 kg         80€
// // D            50€                                      Entre Mas  80 kg        100€
// // E            30€
// // F            10€

// //--------------------------------------------

// // Crearemos una subclase llamada Lavadora con las siguientes características:
// // ● Su atributo es carga, además de los atributos heredados.
// // ● Por defecto, la carga es de 5 kg. Usa una constante para ello.
// // Recuerda que debes llamar al constructor de la clase padre.
// // Los métodos que se implementara serán:
// // ● Método get de carga.
// // ● precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así
// // no se incrementara el precio. Llama al método padre y añade el código necesario.
// // Recuerda que las condiciones que hemos visto en la clase Electrodomestico también
// // deben afectar al precio.

// //--------------------------------------------

// // Crearemos una subclase llamada Televisión con las siguientes características:
// // ● Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// // heredados.
// // ● Por defecto, la resolución será de 20 pulgadas y el 4k será false.
// // Recuerda que debes llamar al constructor de la clase padre.
// // Los métodos que se implementara serán:
// // ● Método get de resolución y atributo de 4K.
// // ● precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementará el precio
// // un 30% y si tiene 4k incorporado, aumentará 50 €. Recuerda que las condiciones que
// // hemos visto en la clase Electrodoméstico también deben afectar al precio.

// //--------------------------------------------

// // Ahora crea una clase mainApp que realice lo siguiente:
// // • Crea un array de Electrodomésticos de 10 posiciones.
// // • Asigna a cada posición un objeto de las clases anteriores con los valores que desees. •
// // Ahora, recorre este array y ejecuta el método precioFinal().
// // • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por
// // un lado, el de las lavadoras por otro y la suma de los Electrodomésticos(puedes crear
// //     objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// //     electrodomésticos).Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300,
// //     una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// //         (300 + 200 + 500) para electrodomésticos, 200 para lavadora y 500 para televisión.

// //--------------------------------------------
// //--------------------------------------------
