
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

repetirTexto("Hola mundo", 3);
repetirTexto("Hola mundo", 0);
repetirTexto("Hola mundo", -20);
repetirTexto("", 20);
repetirTexto("Hola mundo");


