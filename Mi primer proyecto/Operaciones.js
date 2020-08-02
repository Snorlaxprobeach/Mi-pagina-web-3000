var sumar = document.getElementById("Sum");
  sumar.addEventListener("click", sumatorio);
var resta = document.getElementById("Res");
  resta.addEventListener("click", restario);
var indirecto = document.getElementById("IP");
  indirecto.addEventListener("click", alreves);
var directo = document.getElementById("DP");
  directo.addEventListener("click", operaciones);
var multiplicacion = document.getElementById("Mul");
  multiplicacion.addEventListener("click", losmulti);
var dividor = document.getElementById("vidi");
  dividor.addEventListener("click", golaga);



function golaga() {
  var v1 = parseFloat(prompt("Dame el dividendo"));
  var v2 = parseFloat(prompt("Ahora dame el divisor"));
    respuesta = v1 / v2;
  if(v1 + v2 > 0){
    document.write("El resultado de la division es " + respuesta);
  }
  else {
    alert("Borrando datos del usuar10");
    document.write("Ups, ah ocurrid0 un 3rr0r");
  }
}
function losmulti(){
  var v1 = parseFloat(prompt("Dame el primer número"));
  var v2 = parseFloat(prompt("Ahora dame el segundo número"));
    respuesta = v1 * v2;
  if (v1 + v2 > 0){
    document.write("El resultado de tu multiplicación es " + respuesta);
  }
  else {
    alert("8 bit virus ejecut4nd0s3");
    document.write("Se están borrando tus datos por bromista");
  }

}
function restario(){
    alert("Si vas a restar que los resultados sean números naturales y que el minuendo sea mayor que el sustraendo, ya lo mejoraremos en el tiempo")
    var v1 = parseFloat(prompt("Dime el primer minuendo"));
    var v2 = parseFloat(prompt("Ahora el segundo sustraendo"));
    respuesta = (v1 - v2);
    if (v1 + v2 >= 0){
        document.write("Tu resta da como resultado " + respuesta);
    }
    else {
        document.write("Tu resta da como resultado tu peor pesadilla, ajajaajaj");
    }
}

function sumatorio () {
  var respuesta;
  var v1 = parseFloat(prompt("Dime el primer sumando"));
  var v2 = parseFloat(prompt("Ahora el segundo sumando"));
  respuesta = (v1 + v2);
      document.write("Tu suma da como resultado " + respuesta);
}

function alreves () {
  var respuesta;
  var v1 = prompt("Dame la primera variable");
  if (true) {
    var v2 = prompt("ahora la segunda variable");
  }
  if (true){
    var v3 = prompt("ahora dame la tercera");
  }
  if (v1 + v2 + v3 > 0) {
    respuesta = (v1 * v2 / v3);
  }
  else {
    alert ("Tus datos se borraran del sistema automáticamente, error 01010");
    respuesta = ("Borrando datos, error 404");
  }
  document.write("Y tu resultado es: <strong>" + respuesta + "</strong> aproximadamente");
}

function operaciones() {
  var respuesta;
  var v1 = prompt("Dame la primera variable");
    if (true) {
      var v2 = prompt("ahora la segunda variable");
    }
    if (true){
      var v3 = prompt("ahora dame la tercera");
    }
    if (v1 + v2 + v3 > 0) {
      respuesta = (v2 * v3 / v1);
    }
    else {
      alert ("Tus datos se borraran del sistema automáticamente, error 01010");
        respuesta = ("Borrando datos, error 404");
    }
      document.write("Y tu resultado es: <strong>" + respuesta + "</strong> aproximadamente");
}
