//Punto 8
/*var altura = parseInt(prompt("Digite altura del triangulo"));
var x = 1;
while (x <= altura ){
    var y = 1;
    while (y <= x){
        document.write("*");
        y++
    }
    document.write("<br>")
    x++;
}*/

//Punto 9
/*var altura = parseInt(prompt("Digite altura del triangulo"));
var signo = prompt("Signo del triangulo")
for (var x = 1; x <= altura; x++){
    for (var y = altura; y >= x; y--){
        document.write(signo);
    }
    document.write("<br>")
}
*/
//Punto 10
/*let totalGeneral = 0;
let numFacturas = 0;
const numCompras = parseInt(prompt("Ingrese el número de compras del día:"));
for (let i = 1; i <= numCompras; i++) {
  console.log("Cliente #" + i);
  const numProductos = parseInt(prompt("Ingrese el número de productos:"));
  let totalCompra = 0;
  for (let j = 1; j <= numProductos; j++) {
    const valorProducto = parseFloat(prompt("Ingrese el valor del producto: " + j + ":"));
    totalCompra += valorProducto;
  }
  console.log("Total compra: " + totalCompra);
  totalGeneral += totalCompra;
  numFacturas++;
}
console.log("Total Ventas del día: " + numFacturas);
console.log("Total General del día: " + totalGeneral);*/

//Punto 11
/*var alumnos = ["Alumno #1", "Alumno #2", "Alumno #3"];
const numNotas = 3;
for (var i = 0; i < alumnos.length; i++) {
    var nombreAlumno = alumnos[i];
    console.log("Nombre: " + nombreAlumno);
    for (var j = 1; j <= numNotas; j++) {
        console.log("Materia " + j + ":");
        var nota1 = parseFloat(prompt("Nota 1:"));
        var nota2 = parseFloat(prompt("Nota 2:"));
        var nota3 = parseFloat(prompt("Nota 3:"));
        var promedio = (nota1 + nota2 + nota3) / numNotas;
    console.log("Promedio: " + promedio.toFixed(2));
    }
      console.log("");
}*/

// punto 13
/*var menoresEdad = 0;
var mayoresEdad = 0;
for (var i = 1; i <= 10; i++) {
  var edad = parseInt(prompt("Ingrese la edad del estudiante #" + i));
  if (edad < 18) {
    menoresEdad++;
  } else {
    mayoresEdad++;
  }
}
console.log("Estudiantes menores de edad: " + menoresEdad);
console.log("Estudiantes mayores de edad: " + mayoresEdad);*/


/*var menoresEdad = 0;
var mayoresEdad = 0;
var contador = 1;
while (contador <= 10) {
  var edad = parseInt(prompt("Ingrese la edad del estudiante #" + contador));
  if (edad < 18) {
    menoresEdad++;
  } else {
    mayoresEdad++;
  }
  contador++;
}
console.log("Estudiantes menores de edad: " + menoresEdad);
console.log("Estudiantes mayores de edad: " + mayoresEdad);*/

// Punto 14
/*var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 3;
while (intentos > 0) {
  var numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10). Intentos restantes: " + intentos));
  if (numeroUsuario === numeroAleatorio) {
    console.log("¡Felicidades! Has adivinado el número.");
    break; 
  } else {
    intentos--;
    console.log("Número incorrecto. Intenta de nuevo.");
  }
}
if (intentos === 0) {
  console.log("¡Agotaste tus intentos! El número era: " + numeroAleatorio);
}*/
