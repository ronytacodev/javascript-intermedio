// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 14/08/22
// Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 ) - #jonmircha del min 12 al 20 min

const recortarTexto = (cadena = "", longitud = undefined) =>
(!cadena)
    ?console.warn ("No ingresaste una cadena de texto")
    :(longitud === undefined)
        ?console.warn ("No ingresaste la longitud a cortar una cadena de texto")
        :console.info (cadena.slice(0, longitud))

recortarTexto("Hola Mundo", 4);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("", 5);