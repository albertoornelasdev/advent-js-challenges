/*
¡Hemos perdido a un reno y falta poco más de una semana 
para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que 
nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho 
inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 
al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar 
el último...

Necesitamos una función que al pasarle la lista de ids 
de renos nos diga inmediatamente cuál es el que falta:

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
*/

function missingReindeer(ids) {
  const idsSor = ids.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  for (let i = 0; i < idsSor.length + 1; i++) {
    console.log(i + '_' + idsSor[i]);
    if (idsSor[i] !== i) {
      return i;
    }
    if (idsSor[i] === undefined) {
      return i;
    }
  }
}

//[0, 1] debería ser 2 el reno que falta

console.log(missingReindeer([0, 1]));
// console.log(missingReindeer([1]));
// console.log(missingReindeer([0, 2, 3])); // -> 1
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]));

// missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
// missingReindeer([3, 0, 1]); // -> 2
// missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
// missingReindeer([0]); // -> 1 (¡es el último el que falta!)
