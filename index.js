








const btnoperador4 = document.getElementById(calcular2);








function calcular() {
 
  var operacion = document.getElementById("operador2").value;


  var operador1 = document.getElementById("op1").value;

  var operador2 = document.getElementById("op2").value;

  if (operacion == "+") {
    const resultado = parseInt(operador1) + parseInt(operador2);
    console.log(resultado)
    resultado2.innerHTML = resultado;
  } else if (operacion == "-") {
    const resultado = parseInt(operador1) - parseInt(operador2);
    console.log(resultado)
    resultado2.innerHTML = resultado;
  } else if (operacion == "*") {
    const resultado = parseInt(operador1) * parseInt(operador2);
    console.log(resultado)
    resultado2.innerHTML = resultado;
  } else if (operacion == "/") {
    const resultado = parseInt(operador1) / parseInt(operador2);
    console.log(resultado)
    resultado2.innerHTML = resultado;
  }else{
    console.log("no existe operador")
    resultado2.innerHTML = "este operador no existe";
  }
 


 
}
