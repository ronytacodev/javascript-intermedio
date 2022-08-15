
// Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 ) - #jonmircha  
//14/08/22 
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCaracteres = (cadena = "") =>
(!cadena) ? console.warn("no ingresaste ninguna cadena") : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola mundo");