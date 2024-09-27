//////////////////////////////////////////////
// // TypeScript (POO)
//////////////////////////////////////////////

//--------------------------------------------

// // Haz una clase llamada Persona que siga las siguientes condiciones:
// // ● Sus atributos son nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
// // ● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0
// // números, cadena vacía para String, etc). Sexo será hombre por defecto, usa una constante para
// // ello.
// // ● Instancia al menos tres objetos.

// class Persona {

//     static sexoDefecto = 'H';

//     nombre: string;
//     edad: number;
//     dni: string;
//     sexo: string;
//     peso: number;
//     altura: number;

//     constructor(nombre: string = '', edad: number = 0, dni: string = '', sexo: string = Persona.sexoDefecto, peso: number = 0, altura: number = 0) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.dni = dni;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//     }
//     mostrarInformacion() { 
//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Edad: ${this.edad} años`);
//         console.log(`Dni: ${this.dni}`);
//         console.log(`Sexo: ${this.sexo}`);
//         console.log(`Peso: ${this.peso} Kg`);
//         console.log(`Altura: ${this.altura} cm`);
//         console.log(`---------------------------`);

//      }
// }
// let persona1 = new Persona('Ana', 30, '949383292-E', 'Mujer', 65, 1.65);
// let persona2 = new Persona('Luis', 25, '12345678-M', 'Hombre', 75, 1.80);
// let persona3 = new Persona('María', 28, '087654321-F', 'Mujer', 60, 1.70);

// persona1.mostrarInformacion();
// persona2.mostrarInformacion();
// persona3.mostrarInformacion();

//--------------------------------------------

// // Haz una clase llamada Password que siga las siguientes condiciones:
// // ● Que tenga los atributos longitud y contraseña Por defecto, la longitud será de 8.
// // ● Los constructores serán los siguientes:
// // Incluye el método que genere una contraseña aleatoria con esa longitud.

// class Password {

//     static longitudDefecto = 8;

//     longitud: number;
//     contraseña: string;

//     constructor(longitud: number = 0, contraseña: string = '') {
//         this.longitud = longitud >= 4 ? longitud : Password.longitudDefecto;
//         this.contraseña = contraseña || this.generarPassword();
//     }
//     generarPassword() {
//         const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let contraseñaGenerada = '';

//         for (let i = 0; i < this.longitud; i++) {
//             let randomPassword = Math.floor(Math.random() * caracteres.length);
//             contraseñaGenerada += caracteres[randomPassword];
//         }
//         return contraseñaGenerada;
//     }
//     mostrarPassword() {
//         console.log(`Longitud: ${this.longitud}`);
//         console.log(`Contraseña: ${this.contraseña}`);

//     }
// }
// let password1 = new Password(8, 'wodisneo');
// let password2 = new Password();

// password1.mostrarPassword();
// password2.mostrarPassword();

//--------------------------------------------

// Crearemos una superclase llamada Electrodoméstico con las siguientes características:
// ● Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. Indica
// que se podrán heredar.
// ● Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el
// peso de 5 kg. Usa constantes para ello.
// ● Los colores disponibles son blanco, negro, rojo, azul y gris No importa si el nombre está en
// mayúsculas o en minúsculas.


// Los métodos que implementara serán:
// • Métodos get de todos los atributos.
// • comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta, sino
// es correcta usara la letra por defecto. Se invocara al crear el objeto y no será visible.
// • comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el
// color por defecto. Se invocara al crear el objeto y no será visible.
// • precioFinal(): según el consumo energético, aumentara su precio, y según su
// tamaño, también.

// Esta es la lista de precios:
// letra:      precios:                                 Tamaño:                Precio:
// A           100€                                      Entre  0 y 19 kg         10€
// B            80€                                      Entre 20 y 49 kg         50€
// C            60€                                      Entre 50 y 79 kg         80€
// D            50€                                      Entre Mas  80 kg        100€
// E            30€
// F            10€


// Crearemos una subclase llamada Lavadora con las siguientes características:
// ● Su atributo es carga, además de los atributos heredados.
// ● Por defecto, la carga es de 5 kg. Usa una constante para ello.
// Recuerda que debes llamar al constructor de la clase padre.
// Los métodos que se implementara serán:
// ● Método get de carga.
// ● precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así
// no se incrementara el precio. Llama al método padre y añade el código necesario.
// Recuerda que las condiciones que hemos visto en la clase Electrodomestico también
// deben afectar al precio.

//--------------------------------------------

// Crearemos una subclase llamada Televisión con las siguientes características:
// ● Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// heredados.
// ● Por defecto, la resolución será de 20 pulgadas y el 4k será false.
// Recuerda que debes llamar al constructor de la clase padre.
// Los métodos que se implementara serán:
// ● Método get de resolución y atributo de 4K.
// ● precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementará el precio
// un 30% y si tiene 4k incorporado, aumentará 50 €. Recuerda que las condiciones que
// hemos visto en la clase Electrodoméstico también deben afectar al precio.

//--------------------------------------------

// Ahora crea una clase mainApp que realice lo siguiente:
// • Crea un array de Electrodomésticos de 10 posiciones.
// • Asigna a cada posición un objeto de las clases anteriores con los valores que desees. •
// Ahora, recorre este array y ejecuta el método precioFinal().
// • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por
// un lado, el de las lavadoras por otro y la suma de los Electrodomésticos(puedes crear
// objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// electrodomésticos).Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300,
// una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// (300 + 200 + 500) para electrodomésticos, 200 para lavadora y 500 para televisión.



//--------------------------------------------

class Electrodomestico {

    static colorDefecto = 'Blanco'
    static coloresPermitidos = ['Blanco', 'Negro', 'Rojo', 'Azul', 'Gris'];

    static consumoDefecto = 'F';
    static consumoPermitido = ['A', 'B', 'C', 'D', 'E', 'F'];

    static precioBaseDefecto = 100;
    static pesoDefecto = 5;

    precioBase: number;
    color: string;
    consumo: string;
    peso: number;

    constructor(
        precioBase: number = Electrodomestico.precioBaseDefecto,
        color: string = Electrodomestico.colorDefecto,
        consumo: string = Electrodomestico.consumoDefecto,
        peso: number = Electrodomestico.pesoDefecto,
    ) {
        this.precioBase = precioBase;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;
        // Validar color
        if (Electrodomestico.coloresPermitidos.map(c => c.toLowerCase()).includes(color.toLowerCase())) {
            this.color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase(); // Normaliza el color
        } else {
            this.color = Electrodomestico.colorDefecto;
        }

        // Validar consumo
        const consumoValido = consumo.toUpperCase();
        if (Electrodomestico.consumoPermitido.includes(consumoValido)) {
            this.consumo = consumoValido; // Normaliza el consumo
        } else {
            this.consumo = Electrodomestico.consumoDefecto;
        }
    }
    get getPrecio() {
        return this.precioBase;
    }
    get getColor() {
        return this.color;
    };
    get getConsumo() {
        return this.consumo;
    };
    get getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(consumo: string) {

        consumo = consumo.toUpperCase(); // Aseguramos que el string sea mayuscula.

        if (Electrodomestico.consumoPermitido.includes(consumo)) {
            return consumo;
        } else {
            return Electrodomestico.consumoDefecto;
        }
    }
    comprobarColor(color: string) {
        if (Electrodomestico.colorDefecto.includes(color)) {
            return color.charAt(0).toUpperCase() + color.slice(1);
        } else {
            return Electrodomestico.colorDefecto;
        }
    }
    precioFinal() {
        let incremento = 0;

        switch (this.consumo) {
            case 'A': incremento += 100; break;
            case 'B': incremento += 80; break;
            case 'C': incremento += 60; break;
            case 'D': incremento += 50; break;
            case 'E': incremento += 30; break;
            case 'F': incremento += 10; break;
        }
        // Incremento por peso
        if (this.peso >= 80) incremento += 100;
        else if (this.peso >= 50) incremento += 80;
        else if (this.peso >= 20) incremento += 50;
        else incremento += 10;
        return this.precioBase + incremento;
    }
    mostrarElectrodomesticos() {
        console.log(`Precio Base: ${this.precioBase} €`);
        console.log(`Color: ${this.color}`);
        console.log(`Consumo: ${this.consumo}`);
        console.log(`Peso: ${this.peso} Kg`);
        console.log(`Precio Final: ${this.precioFinal()} €`);
        console.log(`-------------------`);
    }
}
let electrodoméstico1 = new Electrodomestico(120, 'Negro', 'c', 12);
let electrodoméstico2 = new Electrodomestico();

electrodoméstico1.mostrarElectrodomesticos();
electrodoméstico2.mostrarElectrodomesticos();

class Lavadora extends Electrodomestico {
    static cargaDefeto = 5;
    carga: number;

    constructor(
        precioBase: number = Electrodomestico.precioBaseDefecto,
        color: string = Electrodomestico.colorDefecto,
        consumo: string = Electrodomestico.consumoDefecto,
        peso: number = Electrodomestico.pesoDefecto,
        carga: number = Lavadora.cargaDefeto
    ) {
        super(precioBase, color, consumo, peso);
        this.carga = carga
    }
    get getCarga() {
        return this.carga;
    }
    precioFinalLavadora() {
        let precioFinal = super.precioFinal();

        if (this.carga > 30) {
            precioFinal += 50
        }
        return precioFinal;
    }
    mostrarLavadora() {
        super.mostrarElectrodomesticos();
        console.log(`Carga: ${this.carga}`);
        console.log(`Precio Final de lavadora: ${this.precioFinalLavadora()} €`);
        console.log(`------`);


    }
}
let lavadora1 = new Lavadora();
let lavadora2 = new Lavadora(150, 'Azul', 'd', 14);

lavadora1.mostrarLavadora();
lavadora2.mostrarLavadora();

class Televisor extends Electrodomestico {
    static resolucionDefecto = 20;
    static imagenDefecto = false;

    resolucion: number;
    imagen: boolean;

    constructor(
        precioBase: number = Electrodomestico.precioBaseDefecto,
        color: string = Electrodomestico.colorDefecto,
        consumo: string = Electrodomestico.consumoDefecto,
        peso: number = Electrodomestico.pesoDefecto,
        resolucion: number = Televisor.resolucionDefecto,
        imagen: boolean = Televisor.imagenDefecto,
    ) {
        super(precioBase, color, consumo, peso);
        this.resolucion = resolucion;
        this.imagen = imagen
    }

    getResolucion() {
        return this.resolucion;
    }
    getImagen() {
        return this.imagen;
    }
    precioFinalTv() {
        let precioFinal = super.precioFinal();
        if (this.resolucion >= 40) {
            precioFinal += (precioFinal * (0.3))
        }
        if (this.imagen === true) {
            precioFinal += 50;
        }
        return precioFinal;
    }
    mostrarTv() {
        super.mostrarElectrodomesticos();
        console.log(`Resolucion: ${this.resolucion}`);
        console.log(`Calidad de imagen (4K): ${this.imagen}`);
        console.log(`Precio final tv: ${this.precioFinalTv()} €`);
        
    }
}
let tv1 = new Televisor();
let tv2 = new Televisor(430, 'negro', 'b', 8, 50, true);

tv1.mostrarTv();
tv2.mostrarTv();

class mainApp {
    electrodomesticos: Electrodomestico[];
    totalElectrodomesticos: number;
    totalLavadoras: number;
    totalTelevisores: number;

    constructor() {
        this.electrodomesticos = [];
        this.totalElectrodomesticos = 0;
        this.totalLavadoras = 0;
        this.totalTelevisores = 0;
    }
    inicializarElectrodomesticos() {
        this.electrodomesticos = [
            new Electrodomestico(100, 'blanco', 'C', 10),
            new Lavadora(200, 'gris', 'B', 25, 35),
            new Televisor(500, 'negro', 'A', 15, 42, true),
            new Electrodomestico(120, 'rojo', 'D', 50),
            new Lavadora(300, 'azul', 'A', 60, 40),
            new Televisor(700, 'gris', 'B', 30, 55, false),
            new Electrodomestico(90, 'blanco', 'F', 70),
            new Lavadora(220, 'blanco', 'C', 80, 25),
            new Televisor(400, 'rojo', 'E', 18, 32, true),
            new Electrodomestico(110, 'negro', 'D', 25)
        ];
    }
    calcuarPrecios() {
        this.electrodomesticos.forEach((electrodomestico) => {
            let precioFinal = electrodomestico.precioFinal();
            // Verificamos si es una instancia de Lavadora o Televisor
            if (electrodomestico instanceof Lavadora) {
                precioFinal = electrodomestico.precioFinalLavadora();
                this.totalLavadoras += precioFinal;

            } else if (electrodomestico instanceof Televisor) {
                precioFinal = electrodomestico.precioFinalTv();
                this.totalTelevisores += precioFinal
            }
            this.totalElectrodomesticos += precioFinal;

        })
    }
    mostrarResultados() {
        console.log(`Total precio de todos los electrodomésticos: ${this.totalElectrodomesticos} €`);
        console.log(`Total precio de todas las lavadoras: ${this.totalLavadoras} €`);
        console.log(`Total precio de todas las televisiones: ${this.totalTelevisores} €`);
    }
    ejecutar(): void {
        this.inicializarElectrodomesticos();
        this.calcuarPrecios();
        this.mostrarResultados();
    }
}

let app = new mainApp();
app.ejecutar();
