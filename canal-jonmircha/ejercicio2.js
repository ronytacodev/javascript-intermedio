
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 14/08/22
// Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 ) - #jonmircha del min 12 al 20 min

const recortarTexto = (cadena = "", longitud = undefined) =>
(!cadena)
    ?console.warn ("No ingresaste una cadena de texto")
    :(longitud === undefined)
        ?console.warn ("No ingresaste la longitud a cortar una cadena de texto")
        :console.info (cadena.slice(0, longitud))

// recortarTexto("Hola Mundo", 4);
// recortarTexto();
// recortarTexto("Hola Hola");
// recortarTexto("", 5);

//****************************************************** */
//Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 ) - #jonmircha
//apartir del min 20 fecha 15/08/22

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']

const cadenaAArreglo = (cadena="", separador=undefined)=>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:(separador===undefined)
?console.warn("No ingresaste el caracter separador")
:console.info(cadena.split(separador));

// cadenaAArreglo("Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores minus libero in omnis perspiciatis facere, officia architecto, inventore explicabo velit tempora impedit, distinctio aspernatur mollitia quibusdam sit dicta. Praesentium", " ");
// cadenaAArreglo();
// cadenaAArreglo("Hola mundo");
// cadenaAArreglo(""," ");

//****************************************************** */
//Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 ) - #jonmircha
//apartir del min 27 fecha 15/08/22
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (texto="", veces=undefined)=>{
    if(!texto) return console.warn("No ingresaste un texto");

    if(veces===undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if(veces===0) return console.error("El número de veces no puede ser 0");

    if(Math.sign(veces)===-1) return console.error("El número de veces no puede ser negativo");

    for (let i=1; i<=veces; i++) console.info(`${texto}, ${i}`);
}

// repetirTexto("Hola mundo", 3);
// repetirTexto("Hola mundo", 0);
// repetirTexto("Hola mundo", -20);
// repetirTexto("", 20);
// repetirTexto("Hola mundo");

//Curso JavaScript: 36. Ejercicios de Lógica de Programación ( 3 / 10 ) 16/08/22

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". del min 1 hasta el min 6

const invertirCadena = (cadena = "") =>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:console.info(cadena.split("").reverse().join(""));

// invertirCadena();
// invertirCadena("Hola Mundo");
// invertirCadena("Javascript es increíble");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// del min 6 hasta el min 16 

const textoEnCadena = (cadena ="", texto ="") => {
    if(!cadena) return console.warn("No ingresaste el texto largo");

    if(!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i=0;
    contador=0;

    while(i!==-1){
        i=cadena.indexOf(texto, i);
        if(i!==-1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

// textoEnCadena();
// textoEnCadena("","mundo");
// textoEnCadena("hola mundo adios mundo");
// textoEnCadena("hola mundo adios mundo yolo mundo holi mundo", "mundo");


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//Curso JavaScript: 36. Ejercicios de Lógica de Programación ( 3 / 10 )  del min 17 al min 22

const palindromo =(palabra="")=>{
    if(!palabra)return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ?console.info(`Si es palindromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
    :console.info(`No es palindromo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
}

// palindromo();
// palindromo("hola mundo");
// palindromo("Salas");


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "")=>
(!texto)
?console.warn("No ingresaste un texto")
:(!patron)
?console.warn("No ingresaste un patrón de caracteres")
:console.info(texto.replace(new RegExp(patron, "ig"), ""));

// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
//Curso JavaScript: 37. Ejercicios de Lógica de Programación ( 4 / 10 ) - #jonmircha 18/08/22 del min 1 al min 4

const aleatorio = () => console.info(Math.round((Math.random()*100)+500));

// aleatorio();



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//Curso JavaScript: 37. Ejercicios de Lógica de Programación ( 4 / 10 ) - #jonmircha 18/08/22 del min 5 al min 14

const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un número");

    if(typeof numero !=="number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return(numero === alReves)
    ?console.info(`Si es capícua, Número original ${numero}, Número al revés ${alReves}`)
    :console.info(`No es capicua, Número original ${numero}, Número al revés ${alReves}`)

}

// capicua();
// capicua("19");
// capicua({});
// capicua(2000);
// capicua(2002);
// capicua(18.99);
// capicua(212.212);




// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
//Curso JavaScript: 37. Ejercicios de Lógica de Programación ( 4 / 10 ) - #jonmircha 18/08/22 del min 15 al min 14

const factorial = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !=="number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if(numero === 0) return console.error("El número no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial = factorial*i; 
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

// factorial();
// factorial("5");
// factorial([1,2,3]);
// factorial(0);
// factorial(-5);
// factorial(5);
// factorial(8);


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
//Curso JavaScript: 38. Ejercicios de Lógica de Programación ( 5 / 10 )  23/08/22  

const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !=="number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if(numero === 0) return console.error("El número no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i=2; i<numero; i++){
        if((numero%i)===0){
            divisible=true;
            break;
        }
    }

    return (divisible)
    ?console.log(`El número ${numero}, NO es primo`)
    :console.log(`El número ${numero}, SÍ es primo`);

}

// numeroPrimo();
// numeroPrimo("320");
// numeroPrimo(true);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(-13);
// numeroPrimo(13);
// numeroPrimo(200);


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
//Curso JavaScript: 38. Ejercicios de Lógica de Programación ( 5 / 10 )  23/08/22  min 13

const numeroParImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return ((numero % 2) === 0)
    ?console.info(`El número ${numero} es Par`)
    :console.info(`El número ${numero} es Impar`)
}

// numeroParImpar();
// numeroParImpar("23");
// numeroParImpar(-398);
// numeroParImpar(19);



// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
//Curso JavaScript: 38. Ejercicios de Lógica de Programación ( 5 / 10 )  25/08/22 

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn ("No ingresaste grados a convertir");

    if (typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un númweo`);

    if (unidad === undefined) return console.warn ("No ingresaste el tipo de grado a convertir");

    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
    }else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`);
    }else {
        return console.error("El tipo de grados a convertir NO es válido");
    }

}

// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2, true);
// convertirGrados(2, "Hola");
// convertirGrados(2, "E");
// convertirGrados(0, "C");
// convertirGrados(100, "C");
// convertirGrados(32, "F");
// convertirGrados(100, "F");


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//Curso JavaScript: 39. Ejercicios de Lógica de Programación ( 6 / 10 ) 26/08/22 hasta el min 12

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el número a convertir");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (base === undefined) return console.warn("No ingresaste la base a convertir");

    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un númer○`);

    if (base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    } else {
        return console.error("El tipo de base a convertir NO es válido");
    }
}

// convertirBinarioDecimal();
// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100, "2");
// convertirBinarioDecimal(100, 2);
// convertirBinarioDecimal(4, 10);
// convertirBinarioDecimal(114, 10);



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
//Curso JavaScript: 39. Ejercicios de Lógica de Programación ( 6 / 10 ) 27/08/22 hasta el min 20 

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto");

    if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`);

    if (monto === 0) return console.error("El monto no puede ser 0");

    if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número`);

    if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto*descuento) / 100)}`);
}

// aplicarDescuento();
// aplicarDescuento("200");
// aplicarDescuento(0);
// aplicarDescuento(-1000);
// aplicarDescuento(1000, "20");
// aplicarDescuento(1000,-20);
// aplicarDescuento(1000);
// aplicarDescuento(1000,25);


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//Curso JavaScript: 39. Ejercicios de Lógica de Programación ( 6 / 10 ) 27/08/22 hasta el min 36

const calcularYears = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");

    if (fecha instanceof Date) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    yearsenMS = 1000*60*60*24*365
    yearsHumanos = Math.floor(hoyMenosFecha / yearsenMS); 
}